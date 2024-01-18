import { Avatar, AvatarFallback } from "./ui/avatar";
import { User } from "next-auth";
import Image from "next/image";

interface Props {
  user: User;
}

function UserAvatar({ user }: Props) {
  return (
    <Avatar>
      {user.image && (
        <div className="relative w-ful h-full aspect-square">
          <Image fill src={user.image} alt="user profile" referrerPolicy="no-referrer" />
        </div>
      )}
      {!user.image && (
        <AvatarFallback>
          <span className="sr-only">{user?.name}</span>
        </AvatarFallback>
      )}
    </Avatar>
  );
}

export default UserAvatar;
