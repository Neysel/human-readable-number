module.exports = function toReadable (number) {
        number = String(number) // делаем строку из числа
        const result = []   //массив
         function NumBeforeTen(num) {   //единицы
            switch(+num) {
                   case 0: return ''; break;
                   case 1: return 'one'; break;
                   case 2: return 'two'; break;
                   case 3: return 'three'; break;
                   case 4: return 'four'; break;
                   case 5: return 'five'; break;
                   case 6: return 'six'; break;
                   case 7: return 'seven'; break;
                   case 8: return 'eight'; break;
                   case 9: return 'nine'; break;
           } return
       }

       function NumDecimalBeforeTwenty(num) { //числа до 20ти
        switch(+num) { 
            case 10: return 'ten';  break;
            case 11: return 'eleven';  break;
            case 12: return 'twelve'; break;
            case 13: return 'thirteen';  break;
            case 14: return 'fourteen';  break;
            case 15: return 'fifteen';  break;
            case 16: return 'sixteen';  break;
            case 17: return 'seventeen';  break;
            case 18: return 'eighteen';  break;
            case 19: return 'nineteen';  break;
        }   
       return 'error' + num
       console.log(NumDecimalBeforeTwenty(num))
       }

       function NumDecimal(num) {        // десятки
        switch(+num) {
                   case 0: return ''; break;
                   case 1: ; break;
                   case 2: return 'twenty '; break;
                   case 3: return 'thirty '; break;
                   case 4: return 'forty '; break;
                   case 5: return 'fifty '; break;
                   case 6: return 'sixty '; break;
                   case 7: return 'seventy '; break;
                   case 8: return 'eighty '; break;
                   case 9: return 'ninety '; break;
        }
       }

   

       function DecimalAndUnits(num) { //определяем число ли это до 20 
        if (+num >= 10 && +num < 20) {
            return NumDecimalBeforeTwenty(+num)
       } else { 
        return NumDecimal(num[0]) + NumBeforeTen(num[1])
       }
    }


     if (+number === 0) {
        result.push ('zero');
     } else if (number < 10) {  //числа до 10
        result.push (NumBeforeTen(number))
    } else if (number >= 10 && number < 20) {   //числа до 20
        result.push (NumDecimalBeforeTwenty(number))
    } else if (number >= 20 && number < 100) {  //числа до сотни
        result.push(NumDecimal(number[0]) + NumBeforeTen(number[1]))
    } else {        //числа с сотни до 999
        result.push(NumBeforeTen(number[0]) + ' hundred ' + DecimalAndUnits(number[1] + number[2]))
       
    } 

    console.log(result)
    return String(result).trim() //обрезка пробелов по краям
}
