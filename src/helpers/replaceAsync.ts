// asynchroneous string replace function

async function replaceAsync(
  string: string,
  searchValue: string | RegExp,
  replacer: ((substring: string, ...args: any[]) => string | Promise<string>) | string
) {
  try {
    if (typeof replacer === 'function') {
      // 1. Run fake pass of `replace`,
      // collect promise objects into values from `replacer` calls
      const values: any[] = [];

      string.replace(searchValue, (match, ...args: any[]) => {
        values.push(replacer(match, ...args));
        return '';
      });

      // 2. Resolve them with `Promise.all`
      return Promise.all(values).then((resolvedValues) =>
        // 3. Run `replace` with resolved values
        string.replace(searchValue, () => resolvedValues.shift())
      );
    }

    if (typeof replacer === 'string') {
      return Promise.resolve(string.replace(searchValue, replacer));
    }
  } catch (error) {
    return Promise.reject(error);
  }

  return Promise.reject(new Error('Invalid replacer argument'));
}

export default replaceAsync;
