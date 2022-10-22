import React, { ChangeEventHandler, useState } from 'react';
import Button from '../../components/Button';
import { useRepoStore } from '../../controllers/repoStore';
import { File } from '../../gitConstructors/GitBranch';
import './gitClient.scss';

const GitClient: React.FC = () => {
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

  const handleCommit = () => {
    const commitMessage = prompt('commit message');
    gitRepo?.commit(commitMessage ?? 'no message');
  };

  return (
    <div className="gitClient">
      <div>current branch: {gitRepo.currentBranch?.branchName}</div>

      <textarea name="file" id="" value={fileText} onChange={handleChanges} />

      <div className="files__buttons">
        <Button onClick={handleSave}>Save</Button>
        {/* <Button className="files__buttons__button" onClick={}>Cancel</Button> */}
        <Button onClick={handleCommit}>Commit</Button>
      </div>
    </div>
  );
};
export default GitClient;
