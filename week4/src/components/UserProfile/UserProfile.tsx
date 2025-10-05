import type { UserData } from "./UserProfileCard/UserData.types";
import { UserProfileCard } from "./UserProfileCard/UserProfileCard";

export const UserProfile = () => {
  const users: UserData[] = [
    {
      id: "1",
      avatarUrl: "https://i.pravatar.cc/150?img=1",
      name: "Alice Wonderland",
      email: "alice.w@example.com",
      skills: [
        { name: "React", level: "Advanced" },
        { name: "TypeScript", level: "Intermediate" },
        { name: "CSS", level: "Advanced" },
      ],
      isOnline: true,
    },
    {
      id: "2",
      avatarUrl: "https://i.pravatar.cc/150?img=2",
      name: "Bob Builder",
      email: "bob.b@example.com",
      skills: [
        { name: "Project Management", level: "Advanced" },
        {
          name: "Construction",
          level: "Beginner",
        },
      ],
      isOnline: false,
    },
    {
      id: "3",
      avatarUrl: "https://i.pravatar.cc/150?img=3",
      name: "Charlie Chaplin",
      email: "charlie.c@example.com",
      skills: [
        {
          name: "Vue.js",
        },
        {
          name: "Node.js",
          level: "Intermediate",
        },
      ],
      isOnline: true,
    },
  ];

  return (
    <div
      style={{
        backgroundColor: "lightgray",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "8px",
          padding: "20px",
          justifyContent: "center",
          backgroundColor: "lightgray",
          flexWrap: "wrap",
        }}
      >
        {users.map((user) => (
          <UserProfileCard
            key={user.id}
            user={user}
            onViewDetails={(userId) =>
              alert(`View details for user ID: ${userId}`)
            }
          />
        ))}
      </div>
    </div>
  );
};
