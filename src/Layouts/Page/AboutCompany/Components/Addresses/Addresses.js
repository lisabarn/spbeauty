import PrimaryButton from "../../../../../Components/PrimaryButton";
import SecondaryButton from "../../../../../Components/SecondaryButton";
import ListElement from "./ListElement";
function Addresses() {
    const styles = {
        border: '1px solid rgba(100, 116, 139, 0.12)',
        borderRadius: '8px',
        height: '420px'
    };
    return (
        <div style={styles} className='d-inline-flex flex-column justify-content-between col gap-4 p-4'>
            <div>
                <div className='title'>Адреса заведений</div>
                <div className='flex-column gap-2 mt-4'>
                    <ListElement>Санкт-Петербург, Невский пр-т. 28</ListElement>
                    <ListElement>Санкт-Петербург, Казанская ул, 7</ListElement>
                </div>
            </div>
            <SecondaryButton>Добавить филиал</SecondaryButton>
        </div>
    );
}

export default Addresses;