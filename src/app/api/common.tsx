import { UserData } from "@/database/user";

function timeStringToMilliseconds(timeString: string): number {
  const [hours, minutes, seconds] = timeString.split(":").map(Number);
  return (hours * 3600 + minutes * 60 + seconds) * 1000;
}

function generateJSX(
  userDataList: UserData[],
  custodyAddress: string
): JSX.Element {
  const sortedUserDataList = userDataList.sort(
    (a, b) =>
      timeStringToMilliseconds(a.completionTime) -
      timeStringToMilliseconds(b.completionTime)
  );

  const userIndex = sortedUserDataList.findIndex(
    (userData) => userData.custody_address === custodyAddress
  );

  const startIndex = Math.max(userIndex - 2, 0);
  const endIndex = Math.min(userIndex + 3, sortedUserDataList.length);

  const relevantUsers = sortedUserDataList.slice(startIndex, endIndex);

  const jsx = (
    <div
      style={{
        justifyContent: "flex-start",
        alignItems: "center",
        display: "flex",
        width: "100%",
        height: "100%",
        backgroundColor: "#f4f4f4",
        padding: 50,
        lineHeight: 1.2,
        fontSize: 24,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: 20,
        }}
      >
        <h2 style={{ textAlign: "center", color: "lightgray" }}>Leaderboard</h2>
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
          >{`#${startIndex + index + 1}. ${userData.username} | ${
            userData.completionTime
          }`}ms</div>
        ))}
      </div>
    </div>
  );

  return jsx;
}

export { generateJSX };
