import React, { ChangeEventHandler, useState } from 'react';
import { useRepoStore } from '../../controllers/repoStore';
import { File } from '../../gitConstructors/GitBranch';
import './files.scss';

const Files: React.FC = () => {
  const { gitRepo } = useRepoStore((state) => state);

  const [fileText, setFileText] = useState<string>(gitRepo.file.content);

  const handleChanges: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setFileText(e.target.value);
  };

  const handleSave = () => {
    const file: File = {
      name: 'test',
      content: fileText,
      lastModified: new Date(),
      type: 'text'
    };

    gitRepo?.saveFile(file);

    alert('saved');
  };

  return (
    <div className="files">
      <div>current branch: master</div>

      <textarea name="file" id="" value={fileText} onChange={handleChanges} />

      <div className="files__buttons">
        <button className="files__buttons__button" onClick={handleSave}>
          Save
        </button>
        {/* <button className="files__buttons__button" onClick={}>Cancel</button> */}
        <button className="files__buttons__button" onClick={() => gitRepo?.commit('a commit')}>
          Commit
        </button>
      </div>
    </div>
  );
};
export default Files;
