import { useData } from './useData';

export const List = () => {
  const data = useData();

  return (
    <div>
      <ul>
        {data.map((data) => (
          <li>{data.title}</li>
        ))}
      </ul>
    </div>
  );
};
