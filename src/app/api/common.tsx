import { UserData } from "@/database/user";
import { getRelevantUsers } from "@/utils/helpers";

function generateJSX(
  userDataList: UserData[],
  custodyAddress: string
): JSX.Element {
  const { startIndex, relevantUsers } = getRelevantUsers(
    userDataList,
    custodyAddress
  );

  const jsx = (
    <div
      style={{
        justifyContent: "flex-start",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        backgroundColor: "#f4f4f4",
        padding: 50,
        lineHeight: 1.2,
        fontSize: 24,
      }}
    >
      <h2 style={{ textAlign: "center", color: "lightgray" }}>Leaderboard</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: 20,
          width: "100%", // Ensuring full width
        }}
      >
        {relevantUsers.map((userData, index) => (
          <div
            key={startIndex + index}
            style={{
              backgroundColor: "#007bff",
              color: "#fff",
              padding: 10,
              marginBottom: 10,
              borderRadius: 4,
              whiteSpace: "nowrap",
              overflow: "visible",
            }}
          >
            {`#${startIndex + index + 1}. ${userData.username} | ${
              userData.completionTime
            }ms`}
          </div>
        ))}
      </div>
    </div>
  );

  return jsx;
}

export { generateJSX };
