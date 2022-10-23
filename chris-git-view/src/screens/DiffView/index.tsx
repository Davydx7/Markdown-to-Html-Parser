import Button from '../../components/Button';
import './diffView.scss';

const DiffView = () => {
  return (
    <div className="diffView">
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
      <Button>View Diff</Button>
    </div>
  );
};
export default DiffView;
