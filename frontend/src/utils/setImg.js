export default function setImg(category){

    switch (category.toLowerCase()) {
        case 'saúde':
            return 'https://image.flaticon.com/icons/svg/2728/2728977.svg';
        case 'estudo':            
            return 'https://www.flaticon.com/br/premium-icon/icons/svg/2708/2708780.svg';
        case 'entretenimento':
            return 'https://image.flaticon.com/icons/svg/2729/2729042.svg';
        default:
            return 'https://image.flaticon.com/icons/svg/883/883746.svg';
    }   

}