<div class="SideBlock">
    <h1 class="MainText">Сообщения</h1>
<section class="MainBlock">
<div>
    <section class="message">
        <img class="avatar">
        <div class="divOfText"><p class="dialog">Леонид Яковлев</p><p class="dialog">Заходил 5 минут назад</p></div>
        <div class="BlockOfElips">
            <div class="elips"></div>
            <div class="elips"></div>
            <div class="elips"></div>
        </div>
    </section>
    <hr>
</div>
<input class="search" placeholder="Send a messege...">
</section>
</div>

<style type="text/css">
.SideBlock{
    background: #212717;
    border-radius: 15px;
    width: 95%;
    height: 100%;
    margin-left: 2%;
}
.MainText{
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 48px;
    color: #ffffff;
    margin-left: 2%;
}
.MainBlock{
    background: #cfd0ab;
    border-radius: 10px;
}
.message{
    display: flex;
}
.avatar{
    border-radius: 100%;
    width: 90px;
    height: 90px;
    background-color: #d9d9d9;
    margin-left: 2%;
    margin-top: 2%;
    cursor: pointer;
}
.dialog{
    font-family: var(--font-family);
font-weight: 400;
font-size: 24px;
color: #000;
cursor: pointer;
}
.divOfText{
    margin-left: 2%;
    margin-top: 2%;
}
.BlockOfElips{
    display: flex;
    margin-left: 70%;
    margin-top: 2%;
}
.elips{
    border-radius: 100%;
    width: 30px;
    height: 30px;
    background-color: #212717;
    cursor: pointer;
}
.search{
    border: 1px solid #000;
border-radius: 15px;
height: 79px;
width: 80%;
font-family: var(--font-family);
font-weight: 400;
font-size: 48px;
color: #000;
margin-left: 8%;
margin-top: 30%;
margin-bottom: 2%;
}
</style>