import React, { useState} from "react";
import {useSelector} from "react-redux";
import CustomTable from "../../components/Tabel/index"
import Input from "../../components/Input/Input";

function UserList() {
    const [search, setSearch] = useState({search: ''})
    const userData = useSelector(state => state.UserData.userData);
    const [searchData, setSearchData] = useState(userData)

    const handleChangeInput = (key, value) => {
        setSearch({
            ...search,
            [key]: value
        })

        const searchUserData = userData.filter((item) => (
            (item.name.toLowerCase().startsWith(value.toLowerCase()) || item.email.toLowerCase().startsWith(value.toLowerCase()))
        ));

        setSearchData(searchUserData)
    }

    const renderInput = ( type = 'text', id, label, value, width, placeholder) => {
        return (
            <div >
                <Input
                    id={id}
                    label={label}
                    value={value}
                    type={type}
                    onChange={handleChangeInput}
                    width={width}
                    placeholder={placeholder}
                />
            </div>
        )
    }

    return (
        <div className="bg-gray-200 font-sans text-gray-700">
            <div className="container md:mx-auto mx-auto p-8 flex" style={{minHeight:'100vh'}}>
                <div className="bg-white mt-20 rounded-lg overflow-hidden min-w-full shadow-2xl">
                    <div className='flex justify-end mr-3'>
                        {renderInput('text', 'search', '', search.search, 'half', 'search' )}
                    </div>
                    <CustomTable rows={searchData}/>
                </div>
            </div>
        </div>
    );
}

export default UserList;
