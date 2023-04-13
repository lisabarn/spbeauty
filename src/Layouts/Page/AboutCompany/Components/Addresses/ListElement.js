import styled from 'styled-components';
import SecondaryButton from '../../../../../Components/SecondaryButton';
import EditIcon from '../../../../../Icons/EditIcon';
import RemoveIcon from '../../../../../Icons/RemoveIcon';
import IconOnlyButton from '../../../../../Components/IconOnlyButton.js';

const Option = styled.div`
    outline: none;
    border-radius: 0px;
    border: none;
    background-color: none;
    color: #0F172A;
`;

function ListElement(props) {
    return (
        <div className='d-flex flex-row justify-content-between align-items-center align-self-stretch gap-2'>
            <div><Option className='flex-grow-1 py-3 '>{props.children}</Option>
            </div>
            <div className='d-inline-flex gap-1'>
                <EditIcon minWidth='0'>Ред.</EditIcon>
                <RemoveIcon minWidth='0'>Удл.</RemoveIcon>
            </div>
        </div>
    );
}

export default ListElement;