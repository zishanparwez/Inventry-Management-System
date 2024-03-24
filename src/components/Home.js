import { useEffect, useState } from "react";
import { _deleteItem, _getItems } from "../network/item";
import { useNavigate, createSearchParams } from 'react-router-dom';

const Home = () => {

    const [items, setItems] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getItems();
    }, [])

    const getItems = async () => {
        _getItems().then((res) => {
            setItems(res.data.data);
        })
    }

    const deleteItem = async (itemId) => {
        await _deleteItem(itemId).then((res) => {
            getItems();
        });
    }

    const editItem = async (itemId) => {
        navigate({pathname: "/item/edit", search: createSearchParams({
                itemId: itemId
            }).toString()
        })
    }


    return (
        <>
        <div className="home-con">
            <div className="home-header" style={{display: 'flex'}}>
                Items List 
            </div>
            <div className="item-list-con">
            <table>
                <tr>
                    <th>S.No</th>
                    <th>Item Name</th>
                    <th>Added By</th>
                    <th>Action</th>
                </tr>
                {items.map((item, index) => (
                <tr key={index}>
                    <td>{index+1}</td>
                    <td>{item?.itemName}</td>
                    <td>{item?.addedByName}</td>
                    <td>
                        <button onClick={() => deleteItem(item.itemId)}>Delete</button>
                        <button onClick={() => editItem(item.itemId)}>Edit</button>
                    </td>
                </tr>
                ))}
            </table>
            </div>
        </div>
        </>
    )
}

export default Home;