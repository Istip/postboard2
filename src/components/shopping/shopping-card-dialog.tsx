interface Props {
  item: Shopping;
}

const ShoppingCardDialog = ({ item }: Props) => {
  return (
    <>
      <h3>{item.name}</h3>
      <p>
        Created by <b>{item.creator}</b>
      </p>
    </>
  );
};

export default ShoppingCardDialog;
