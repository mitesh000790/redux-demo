import React, {useState} from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import CheckBox from "../../components/CheckBox/CheckBox";
import { Hobby } from "../../Utils/Utils";
import {useDispatch} from "react-redux";
import {createUser} from "../../redux/action/action";
import { toastSuccess, toastError } from "../../components/Toast/Toast";
import { useNavigate  } from "react-router-dom";

function Home() {
    const [state, setState] = useState({
        name: '',
        email: '',
        address: '',
        hobby: ['Cricket']
    })
    const dispatch = useDispatch();
    let navigate = useNavigate ();

    const handleChangeInput = (key, value) => {
        setState({
            ...state,
            [key]: value
        })
    }


    const renderInput = ( type = 'text', id, label, value, textarea) => {
        return (
            <div >
                <Input
                    id={id}
                    label={label}
                    value={value}
                    type={type}
                    onChange={handleChangeInput}
                    textArea={textarea}
                />
            </div>
        )
    }

    const handleCheck = (e, name) => {
        const { checked } = e.target;
        setState({...state, hobby: [...state.hobby, name]});
        if (!checked) {
            setState({...state, hobby: state.hobby.filter(item => item !== name)});
        }
    };

    const checkBox = () => {
        const data = Hobby.map(({ id, name, checked }, key) => {
            return (
                <div key={key}>
                    <CheckBox
                        type="checkbox"
                        name={name}
                        value={state.hobby}
                        id={id}
                        isChecked={checked === true ? true : false}
                        handleClick={(e) => handleCheck(e, name)}
                    />
                    {name}
                </div>
            );
        });
        return data
    }

    const submitUser = async (e) => {
        e.preventDefault()
        if((state.name && state.email && state.address) === '' ) {
            toastError("Please Fill All Field")
        } else {
            dispatch(createUser({
                ...state
            }))
            toastSuccess("User Add SuccessFully")
            navigate("./userList")
        }
    }


    return (
        <div className="bg-gray-200 font-sans text-gray-700">
            <div className="container max-h-min md:mx-auto mx-auto p-8 flex" style={{minHeight:'100vh'}}>
                <div className="max-w-md mt-20 w-full mb-auto mt-auto mx-auto">
                    <div className="bg-white mt-10 rounded-lg overflow-hidden shadow-2xl">
                        <h1 className="text-3xl text-center mt-7 font-black">Add User</h1>
                        <div className="p-8">
                            <form onSubmit={submitUser}>
                                {renderInput('text', 'name', 'User Name', state.name )}
                                {renderInput('text', 'email', 'User Email', state.email )}
                                {renderInput('text', 'address', 'Address', state.address, 'textarea' )}
                                <label className="block mb-2 text-sm font-medium text-gray-600">Select Your Hobby</label>
                                <div className="flex justify-evenly items-center mb-5">
                                    {checkBox()}
                                </div>
                                <Button action={"Add User"} actionType={"primary"}/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
