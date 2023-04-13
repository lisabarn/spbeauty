import TitledTextInput from "../../../../../../Components/TitledTextInput";
import TitledSelector from "../../../../../../Components/TitledSelector";
import PrimaryButton from "../../../../../../Components/PrimaryButton";
import styled from "styled-components";
function Preferences() {
    return (
        <div className='d-inline-flex flex-column gap-3 mt-5'>
            <TitledTextInput title='Название компании' def='SPBEAUTY'/>
            <TitledSelector title='Тип организации' options={[
                'Салон красоты',
                'Парикмахерская'
            ]}/>
            <TitledTextInput title='Основной телефон для связи' def='+7 (912) 345-67-89'/>
            <div className="mt-2"><PrimaryButton>Сохранить</PrimaryButton></div>
        </div>
    );
}

export default Preferences;