import Card from "../Components/Card";
function CardMain(props) {
  //get weekdates from props
  //getting namefrom props
  //getting ccno from props
  return (
    <div className="card card-side bg-base-100 flex shadow-xl m-10 border-t-2 border-blue-500 min-h-12 min-w-24  justify-center">
      <Card ccno={props.ccno} name={props.name} />
      
      
      <div className="card-body">
        <div>
        <h2 className="card-title dark:text-white">CC NO : {props.ccno}</h2>
        <h3 className="card-title  dark:text-white">Plant    : {props.plant}</h3>
        </div>


        <div class="flex w-full my-20 bottom-0">
          <div class="grid h-10 flex-grow card rounded-box place-items-center font-bold badge">
            {props.weekdates}
          </div>
          <div class="divider divider-horizontal"></div>
          <div class="grid h-10 flex-grow card rounded-box place-items-center">
            <div className="card-actions justify-end">
              <button className="btn btn-primary btn-sm">Register!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardMain;
