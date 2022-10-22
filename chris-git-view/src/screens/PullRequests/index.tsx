import Button from '../../components/Button';
import './pullRequests.scss';

const PullRequests = () => {
  return (
    <div className="pullRequests">
      <div className="branches">
        <div>
          <select>
            <option>master</option>
            <option>test</option>
          </select>
        </div>
        <div>
          <select>
            <option>master</option>
            <option>test</option>
          </select>
        </div>
      </div>
      <Button>Create pull requests</Button>
    </div>
  );
};
export default PullRequests;
