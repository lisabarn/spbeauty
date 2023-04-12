import PrimaryButton from "../../../../../Components/PrimaryButton";
import SecondaryButton from "../../../../../Components/SecondaryButton";
import ListElement from "./ListElement";
function Addresses() {
    const styles = {
        border: '1px solid rgba(100, 116, 139, 0.12)', 
   };
    return (
        <div style={styles} className='d-inline-flex flex-column col gap-4 mt-4'>
            <div className='title'>Адреса заведений</div>
            <div className='d-inline-flex flex-column gap-2'>
                <ListElement>Санкт-Петербург, Невский пр-т. 28</ListElement>
                <ListElement>Санкт-Петербург, Казанская ул, 7</ListElement>
                <SecondaryButton>Добавить филиал</SecondaryButton>
            </div>
        </div>
    );
}

export default Addresses;