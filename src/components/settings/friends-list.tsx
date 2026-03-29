import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

const FriendsList = () => {
  return (
    <div>
      FriendsList
      <Input />
      <br />
      <div className="center gap-2">
        <Badge variant="destructive">Friend 1</Badge>
        <Badge variant="default">Friend 2</Badge>
        <Badge variant="outline">Friend 3</Badge>
        <Badge variant="secondary">Friend 4</Badge>
      </div>
    </div>
  );
};

export default FriendsList;
