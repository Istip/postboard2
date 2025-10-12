import { Calendar, CircleUser } from "lucide-react";

interface Props {
  item: Shopping;
}

const ShoppingCardDialog = ({ item }: Props) => {
  const list = [
    { label: item.creator, value: "Created by", icon: <CircleUser /> },
    {
      label: new Date(item.$createdAt).toLocaleDateString(),
      value: "Date",
      icon: <Calendar />,
    },
  ];

  return (
    <>
      <h3 className="text-2xl pb-4 text-center">{item.name}</h3>
      {list.map((data) => (
        <div
          key={data.value}
          className="flex items-center justify-between gap-2 space-y-1"
        >
          <div className="center text-left gap-2 text-sm">
            {data.icon}
            <span>{data.value}:</span>
          </div>
          <span className="text-right font-semibold text-sm">{data.label}</span>
        </div>
      ))}
    </>
  );
};

export default ShoppingCardDialog;
