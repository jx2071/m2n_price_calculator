export default function Repair(props) {
  const { prices } = props;

  return (
    <div className="mt-4">
      <p>总费用： ${prices[2]} 起</p>
    </div>
  );
}
