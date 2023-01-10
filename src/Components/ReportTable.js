import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavforReport from "./NavforReport";

function ReportTable(props) {
  const navigate = useNavigate();
  let users = [];
  const [flist, setFlist] = useState(props.list); //filtered list and full list local state
  const [list, updatelist] = useState(users); //for checklist
  const [count, setCount] = useState(0);  //multiple button count show
  const [multiple, setMultiple] = useState(false);  //multiple button indication
  const [search,setSearch] = useState(null);  //search result indication

  useEffect(() => {
    console.log(list.length);
    flist.length === 0 ? console.log("No results found!") : console.log(flist);
    //getting the main users list from props and setting
  }, [list, count, flist]);

  const handlecheck = (e) => {
    //console.log(e.target.id, ":", e.target.checked);
    if (e.target.id && e.target.checked) {
      list.push(e.target.id);
      setCount(count + 1);
      //console.log("checked users", list);
      //updatelist(list);
      //props.handleCheckedCancel({list:list.filter((a) => a != e.target.id)});
    } else {
      updatelist(list.filter((a) => a != e.target.id));
      setCount(count - 1);
      //console.log(list);
      //props.handleCheckedCancel({list:list.filter((a) => a != e.target.id),less:true});  //sended direct filtered list values
    }
  };
  //console.log(list);

  console.log(list.filter((item) => item == "12537").length);

  const handleCheckeduser = () => {
    console.log("List of checked users for delete!", list);
    //after updated checked out these below mentioned params
    setMultiple(false);
    updatelist([]);
    setCount(0);
  };
  const handleDelete = (elem) => {
    console.log(elem.target.value);
  };

  const FilteringList = (e) => {
    const val = e.target.value; //check search elem
    
    val ? setSearch(val) : setSearch(null);
    const fromDb = undefined;
    const arr = fromDb || props.list;
    //console.log(e.target.value);
    setFlist(
      arr.filter(
        (item) =>
          item.ccno.toString().includes(e.target.value) ||
          item.Name.toString()
            .toLowerCase()
            .includes(e.target.value.toLowerCase()) ||
          item.status
            .toString()
            .toLowerCase()
            .includes(e.target.value.toLowerCase())
      )
    );
  };

  return (
    <div>
      <div className="relative">
        <div className="navbar bg-base-100">
          <div className="flex-1">
            <a
              className="btn btn-ghost normal-case text-xl"
              onClick={props.handleprint}
            >
              Reports
              <h1 className="font-semibold text-xs justify-center m-2 text-blue-400">
                Print
              </h1>
            </a>
            <button
              className={
                multiple
                  ? "btn btn-outline btn-sm m-2 text-green-600"
                  : "btn btn-outline btn-sm m-2"
              }
              onClick={() =>
                multiple ? setMultiple(false) : setMultiple(true)
              }
            >
              Multiple Select
            </button>
          </div>

          {list.length >= 1 ? (
            <button
              className="btn gap-2 btn-warning mx-2"
              onClick={handleCheckeduser}
            >
              <div>{count}</div>
              Delete Users!
            </button>
          ) : (
            ""
          )}

          <div className="flex-none gap-2">
            <h3 className="text-xs bottom-0 p-1 right-0 my-2 font-semibold animate__animated animate__fadeIn animate__flash animate__slower animate__infinite">
              {
                search?
              flist.length != 0
                ? flist.length + " Records Found >>"
                : "No Records!" : ""}
            </h3>
            <div className="form-control">
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered"
                onChange={FilteringList}
              />
            </div>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  {<img src="user.png" />}
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
              >
                <li onClick={()=>navigate('/logindaisyui')}>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto w-full h-96 overflow-scroll">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>S.No</th>
              <th>CC No</th>
              <th>Name</th>
              <th>Status</th>
              <th>Action</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {flist.length > 0
              ? flist.map(
                  (
                    elem //if search not made its length will be 0.
                  ) => (
                    //so first render get list from props.
                    <tr className="animate__animated animate__fadeIn ">
                      <th>
                        <label>
                          {multiple ? (
                            <input
                              type="checkbox"
                              className="checkbox"
                              id={elem.ccno}
                              onChange={handlecheck}
                              key={elem.ccno}
                              checked={
                                list.filter((item) => item == elem.ccno).length >
                                0
                                  ? true
                                  : false //checking this element in checked list in or not
                              }
                            />
                          ) : (
                            ""
                          )}
                        </label>
                      </th>
                      <td>{elem.sno}</td>
                      <td>{elem.ccno}</td>
                      <td>
                        <div className="flex items-center space-x-3">
                          <div className="avatar">
                            <div className="mask mask-circle w-12 h-12">
                              <img
                                src={props.imgname + elem.ccno + ".jpg"}
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">{elem.Name}</div>
                            <div className="text-sm opacity-50">
                              United States
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        {elem.status}
                        <br />
                        <span className="badge badge-ghost badge-sm">
                          00/00/00 - 07/00/00
                        </span>
                      </td>
                      <th>
                        <button
                          value={elem.ccno}
                          className="btn btn-ghost btn-xs"
                          onClick={handleDelete}
                        >
                          Delete!
                        </button>
                      </th>
                    </tr>
                  )
                )
              : props.list.map((elem) => (
                  <tr  className="animate__animated animate__fadeIn ">
                    <th>
                      <label>
                        {multiple ? (
                          <input
                            type="checkbox"
                            className="checkbox"
                            id={elem.ccno}
                            onChange={handlecheck}
                            key={elem.ccno}
                            checked={
                              list.filter((item) => item == elem.ccno).length >
                              0
                                ? true
                                : false //checking this element in checked list in or not
                            }
                          />
                        ) : (
                          ""
                        )}
                      </label>
                    </th>
                    <td>{elem.sno}</td>
                    <td>{elem.ccno}</td>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-circle w-12 h-12">
                            <img
                              src={props.imgname + elem.ccno + ".jpg"}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{elem.Name}</div>
                          <div className="text-sm opacity-50">
                            United States
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      {elem.status}
                      <br />
                      <span className="badge badge-ghost badge-sm">
                        00/00/00 - 07/00/00
                      </span>
                    </td>
                    <th>
                      <button
                        value={elem.ccno}
                        className="btn btn-ghost btn-xs"
                        onClick={handleDelete}
                      >
                        Delete!
                      </button>
                    </th>
                  </tr>
                ))}
          </tbody>        
        </table>
      </div>
    </div>
  );
}

export default ReportTable;
