export default function UnionType() {


// union制御方法1
const a : string | number | boolean = "a";
const b :string = "b";

const c : string | number | null = localStorage.getItem('userId');
// const d: string = c



// union制御方法2
  type Progress = Start | Loading | Success | Fail;
  type Start = {types: "start"; color: string; };
  type Loading = {types: "loading"; percent: number; };
  type Success = {types: "success"; response: { body: string; }; };
  type Fail = {types: "fail"; reason: string; };

const handle = (result : Progress) => {
  if(result.types === "start") {
    console.log(result.color)
  }
  else if(result.types === "loading") {
    console.log(result.percent)
  }
  else if(result.types === "success") {
    console.log(result.response.body)
  }
  else if(result.types === "fail") {
    console.log(result.reason)
  }
}
const result : Progress = {types: "start", color: "red"};
handle(result)

  return (
    <div>
      <h1>Union Type</h1>
    </div>
  );
}
