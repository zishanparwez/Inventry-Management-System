import { _createItem, _getItem, _updateItem } from "../network/item";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from 'react-router-dom';

const Item = () => {

    const [itemForm, setItemForm] = useState({
        itemName: '',
        addedBy: ''
    });
    const [searchParams] = useSearchParams();
    const [mode, setMode] = useState('Add');
    const [itemIdEditable, setItemIdEditable] = useState('');
    const navigate = useNavigate();

    useEffect(() => {

        const itemId = searchParams.get("itemId");
        if(itemId) {
            setMode('Edit');
            setItemIdEditable(itemId);
        }
    }, [searchParams])

    useEffect(() => {
        if(itemIdEditable) {
            getItem(itemIdEditable);
        }
    }, [itemIdEditable])

    const getItem = async (itemIdEditable) => {
        await _getItem(itemIdEditable).then((res) => {
            console.log({res});
            setItemForm((prevState) => {
                return {
                    ...prevState,
                    itemName: res.data.data.itemName
                }
            })
        })
    }

    const addItem = async () => {
        await _createItem(itemForm).then((res) => {
            if(res.data.status===201) {
                navigate("/")
            }
        })
    }

    const editItem = async () => {
        await _updateItem(itemForm, itemIdEditable).then((res) => {
            navigate("/");
        })
    }



    return (
        <>
        <div className='signup-form-con'>
            <h3>{mode} Item</h3>
            <div className='input-field-con'>
                <input className='input-field' type="text" placeholder='Enter User Name' value={itemForm.itemName} onChange={(e) => {setItemForm((prevState) => { return {...prevState, itemName: e.target.value}})}}></input>
            </div>
            <input className="normal-btn" type="button" value={`${mode} Item`} onClick={mode==='Add' ? addItem : editItem}/>
        </div>
        </>
    )
}

export default Item;