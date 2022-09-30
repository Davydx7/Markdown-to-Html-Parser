// @vitest-environment jsdom

import { test, describe, expect } from 'vitest';

import parseMd from '../src/helpers/parseMd';

// Images
describe('Images', () => {
  test('image with alt and title', async () => {
    await expect(parseMd('![Blue Butterflies](/butterflies.png "image title")')).resolves.toBe(
      '<p><img title="image title" alt="Blue Butterflies" src="/butterflies.png"></p>'
    );
  });

  test('image with title and no alt', async () => {
    await expect(parseMd('![](/butterflies.png "image title")')).resolves.toBe(
      '<p><img title="image title" alt="" src="/butterflies.png"></p>'
    );
  });

  test('image with alt and no title', async () => {
    await expect(parseMd('![Blue Butterflies](/butterflies.png)')).resolves.toBe(
      '<p><img title="" alt="Blue Butterflies" src="/butterflies.png"></p>'
    );
  });

  test('image with no alt and no title', async () => {
    await expect(parseMd('![](/butterflies.png)')).resolves.toBe(
      '<p><img title="" alt="" src="/butterflies.png"></p>'
    );
  });

  test('image with width and height in px', async () => {
    await expect(
      parseMd('![Blue Butterflies](/butterflies.png "image title width=100 height=100")')
    ).resolves.toBe(
      '<p><img height="100" width="100" title="image title" alt="Blue Butterflies" src="/butterflies.png"></p>'
    );
  });

  test('image with width and height in %', async () => {
    await expect(
      parseMd('![Blue Butterflies](/butterflies.png "image title width=50% height=50%")')
    ).resolves.toBe(
      '<p><img height="50%" width="50%" title="image title" alt="Blue Butterflies" src="/butterflies.png"></p>'
    );
  });

  test('image with width in % and height in px', async () => {
    await expect(
      parseMd('![Blue Butterflies](/butterflies.png "image title width=50% height=100")')
    ).resolves.toBe(
      '<p><img height="100" width="50%" title="image title" alt="Blue Butterflies" src="/butterflies.png"></p>'
    );
  });

  test('image with width and no height', async () => {
    await expect(
      parseMd('![Blue Butterflies](/butterflies.png "image title width=100")')
    ).resolves.toBe(
      '<p><img width="100" title="image title" alt="Blue Butterflies" src="/butterflies.png"></p>'
    );
  });

  test('image with height and no width', async () => {
    await expect(
      parseMd('![Blue Butterflies](/butterflies.png "image title height=100")')
    ).resolves.toBe(
      '<p><img height="100" title="image title" alt="Blue Butterflies" src="/butterflies.png"></p>'
    );
  });
});
