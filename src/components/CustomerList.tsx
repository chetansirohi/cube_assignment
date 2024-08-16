import React from "react";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";

interface User {
  name: {
    first: string;
    last: string;
  };
  email: string;
  picture: {
    thumbnail: string;
  };
}

interface CustomerListProps {
  users: User[];
  selectedCustomerId: number | null;
  onSelectCustomer: (id: number) => void;
}

interface RowProps {
  index: number;
  style: React.CSSProperties;
}

const CustomerList: React.FC<CustomerListProps> = ({
  users,
  selectedCustomerId,
  onSelectCustomer,
}) => {
  const Row: React.FC<RowProps> = ({ index, style }) => {
    const user = users[index];
    return (
      <div
        style={style}
        className={`flex items-center p-4 cursor-pointer ${
          selectedCustomerId === index
            ? "bg-primary text-primary-foreground"
            : "hover:bg-gray-100"
        }`}
        onClick={() => onSelectCustomer(index)}
      >
        <img
          src={user.picture.thumbnail}
          alt={`${user.name.first} ${user.name.last}`}
          className="w-10 h-10 rounded-full flex-shrink-0 mr-3"
          loading="lazy"
        />
        <div className="flex-grow min-w-0">
          <h3 className="font-semibold truncate">{`${user.name.first} ${user.name.last}`}</h3>
          <p className="text-sm text-muted-foreground truncate">{user.email}</p>
        </div>
      </div>
    );
  };

  return (
    <AutoSizer>
      {({ height, width }: { height: number; width: number }) => (
        <List
          height={height}
          itemCount={users.length}
          itemSize={72}
          width={width}
        >
          {Row}
        </List>
      )}
    </AutoSizer>
  );
};

export default CustomerList;
