<script lang="ts">

    // const tabs: Tab[] = [
    //     { title: 'Предложения для обмена', component: ExchangeList, action: () => alert('Предложения для обмена')},
    //     { title: 'Хочу обменять', component: ExchangeList , action: () => alert('Хочу обменять')},
    //     { title: 'Хочу получить', component: ExchangeList , action: () => alert('Хочу получить')},
    //     { title: 'Активные обмены', component: ExchangeList , action: () => alert('Активные обмены')},
    //     { title: 'Отзывы на книги', component:  ExchangeList, action: () => alert('Отзывы на книги') }, 
    //     { title: 'Личные данные', component:  ExchangeList, action: () => alert('Личные данные') },   
    //     { title: 'Сообщения', component: MessageList , action: () => alert('Сообщения')},
    //     { title: 'Архив', component: ArchiveList , action: () => alert('Архив')},
    //     { title: 'Выйти', component: ArchiveList , action: () => alert('Выйти')}
    // ];    

    // let activeTab = tabs[0];


</script>


<div class="container">
<div class="getAChance">
    <h1 class="mainText">Полное совпадение</h1>
    <section class="mainSection">
        <div><p class="paDDings">Золотая рыбка</p><p class="paDDings">Золотая рыбка</p></div>
        <div><p class="paDDings">Самара</p><p class="paDDings">Самара</p></div>
        <div><p class="paDDings">Рейтинг</p><p class="paDDings">Рейтинг</p></div>
        <div><p class="paDDings">0</p><p class="paDDings">0</p></div>
        <button class="mainButton"><a class="textForButton" href="#">Другие варианты</a></button>
    </section>
</div>
<div class="getAChance">
    <h1 class="mainText">Частичное совпадение</h1>
    <section class="mainSection">
        <div><p class="paDDings">Золотая рыбка</p><p class="paDDings">Золотая рыбка</p></div>
        <div><p class="paDDings">Самара</p><p class="paDDings">Самара</p></div>
        <div><p class="paDDings">Рейтинг</p><p class="paDDings">Рейтинг</p></div>
        <div><p class="paDDings">0</p><p class="paDDings">0</p></div>
        <button class="mainButton"><a class="textForButton" href="#">Другие варианты</a></button>
    </section>
</div>
<div class="getAChance">
    <h1 class="mainText">Вазможные варианты</h1>
    <section class="mainSection">
        <div><p class="paDDings">Золотая рыбка</p><p class="paDDings">Золотая рыбка</p></div>
        <div><p class="paDDings">Самара</p><p class="paDDings">Самара</p></div>
        <div><p class="paDDings">Рейтинг</p><p class="paDDings">Рейтинг</p></div>
        <div><p class="paDDings">0</p><p class="paDDings">0</p></div>
        <button class="mainButton"><a class="textForButton" href="#">Другие варианты</a></button>
    </section>
</div>
</div>

<style type="text/css">
.mainSection{
    display: flex;
    justify-content: space-between;
    background-color: #CFD0AB;
    border-radius: 10px;
    width: 100%;
}
.getAChance{
    margin-left: 10%;
}
p{
    font-family: var(--font-family);
font-weight: 400;
font-size: 36px;
color: #000;
}
.mainText{
    font-family: var(--font-family);
font-weight: 400;
font-size: 48px;
color: #fff;
}
.paDDings{
    margin: 10px;
}
.mainButton{
    border-radius: 20px;
    background: #212717;
    font-family: var(--font-family);
font-weight: 400;
font-size: 24px;
color: #fff;
cursor: pointer;
width: 244px;
height: 62px;
margin-top: 40px;
margin-right: 50px;
}
.textForButton{
    margin: 10px;

}
</style>