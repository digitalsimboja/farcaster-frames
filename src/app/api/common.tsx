import { UserData } from "./questions/route";

function generateJSX(userDataList: UserData[]): JSX.Element {
  const jsx = (
    <div
      style={{
        justifyContent: "flex-start",
        alignItems: "center",
        display: "flex",
        width: "100%",
        height: "100%",
        backgroundColor: "f4f4f4",
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
        {userDataList.map((userData, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#007bff",
              color: "#fff",
              padding: 10,
              marginBottom: 10,
              borderRadius: 4,
              whiteSpace: "nowrap",
              overflow: "visible",
            }}
          >{`${index + 1}. ${userData.username}  - ${
            userData.completionTime
          }ms`}</div>
        ))}
      </div>
    </div>
  );

  return jsx;
}

export { generateJSX };
