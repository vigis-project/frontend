<script lang="ts">
	import Section from '$components/Section.svelte';
	import { concurrent } from 'svelte-typewriter';
</script>

<div class="">
	<section class="MainSection">
		<div class="FlexDirection">
			<div>
				<h1 class="MainText">
					Обменивайтесь книгами с единомышленниками
				</h1>
				<p class="Secondtext">
					Дайте вашим книгам вторую жизнь и откройте для себя новые истории. Наша платформа соединяет любителей чтения по всей стране.
				</p>
			</div>
			<img src="/Book Stack Outline_Neoclipart_com.svg">
		</div>
	</section>
	<section class="CenterSection">
		<h1 class="FindText">
			Найдите интересующие вас книги
		</h1>
		<h3 class="SecondFindText">
			Введите название книги, автора или жанр, чтобы найти книги для обмена
		</h3>
		<div class="FlexDirection">
			<input class="FindInput" placeholder="Поиск книг...">
			<button class="FindButton"><img class="ImgFind" src="/pngwing.svg">Поиск</button>
		</div>
	</section>
	<section class="ViewDirection">
		<div class="ViewtextBlock">
		<h1 class="ViewText">Популярные книги для обмена</h1>
		<h3 class="SecondViewText">Эти книги пользуются наибольшим спросом среди участников нашего сообщества</h3>
		</div>
		<div class="FlexDirection">
			<div class="BookBlock">
				<div class="ImageOfViewBlock">

				</div>
				<div class="GreenBlockView">
					<h4 class="NameOfBook"> NaZvanie</h4>
					<h5 class="">aVtor</h5>
					<div class="FlexDirection">
						<img src="/Group14.svg">
						<span>GorOd</span>
					</div>
				</div>
			</div>
			<div class="BookBlock">
				<div class="ImageOfViewBlock">

				</div>
				<div class="GreenBlockView">
					<h4 class="NameOfBook"> NaZvanie</h4>
					<h5 class="">aVtor</h5>
					<div class="FlexDirection">
						<img src="/Group14.svg">
						<span>GorOd</span>
					</div>
				</div>
			</div>
			<div class="BookBlock">
				<div class="ImageOfViewBlock">

				</div>
				<div class="GreenBlockView">
					<h4 class="NameOfBook"> NaZvanie</h4>
					<h5 class="">aVtor</h5>
					<div class="FlexDirection">
						<img src="/Group14.svg">
						<span>GorOd</span>
					</div>
				</div>
			</div>
			<div class="BookBlock">
				<div class="ImageOfViewBlock">

				</div>
				<div class="GreenBlockView">
					<h4 class="NameOfBook"> NaZvanie</h4>
					<h5 class="">aVtor</h5>
					<div class="FlexDirection">
						<img src="/Group14.svg">
						<span>GorOd</span>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="HowItsWorks">
		<div>
		<h1 class="MainRulesText">Как это работает</h1>
		<h3 class="SideRulesText">Обмен книгами — это просто! Всего несколько шагов, и вы уже читаете новую книгу</h3>
		</div>
		<aside class="Rules">
			<div>
				<img src="/book-open1.svg">
				<h2 class="MainAsideText">1. Добавьте свои книги</h2>
				<h3 class="asideText">Сфотографируйте и добавьте книги, которыми вы готовы поделиться с другими</h3>
			</div>
			<div>
				<img src="/search1.svg">
				<h2 class="MainAsideText">2. Найдите интересные книги</h2>
				<h3 class="asideText">Просматривайте каталог и находите книги, которые хотели бы прочитать</h3>
			</div>
			<div>
				<img src="/arrow-left-right1.svg">
				<h2 class="MainAsideText">3. Договоритесь об обмене</h2>
				<h3 class="asideText">Свяжитесь с владельцем книги и договоритесь о встрече или отправке по почте</h3>
			</div>
		</aside>
	</section>
	<section class="otZivi">
		<div class="otZiviText">
			<h1 class="MianTextOfotZivi">Отзывы участников</h1>
			<h2 class="SecondTextOfotZivi">Что говорят о нас любители книг, уже присоединившиеся к сообществу</h2>
		</div>
		<aside class="otZivBlocks">
			<div class="otZiv"></div>
			<div class="otZiv"></div>
			<div class="otZiv"></div>
		</aside>
	</section>
</div>

<style type="text/css">
.MainSection{
	background: #3a3e32;
}
.MainText{
	font-family: var(--font-family);
font-weight: 700;
font-size: 40px;
color: #fff;
height: 20%;
}
.Secondtext{
	font-family: var(--font-family);
font-weight: 400;
font-size: 25px;
color: #fff;
}
.FlexDirection{
	display: flex;
	justify-content: space-around;
}
.CenterSection{
	display: flex;
	flex-direction: column;
	justify-content: center;
	background-color: #fff;
}
.FindText{
	font-family: var(--font-family);
font-weight: 800;
font-size: 64px;
text-align: center;
color: #212717;
}
.SecondFindText{
	font-family: var(--font-family);
font-weight: 600;
font-size: 36px;
text-align: center;
color: #212717;
}
.FindInput{
	border-radius: 15px;
	background: rgba(33, 39, 23, 0.9);
	width: 867px;
height: 79px;
}
.FindButton{
	background: #cfd0ab;
	color: #000;
	font-family: var(--font-family);
font-weight: 600;
font-size: 36px;
color: #000;
display: flex;
cursor: pointer;
border-radius: 15px;
width: 240px;
height: 79px;
}
.ImgFind{
	width: 50px;
height: 50px;
}
.ViewDirection{
	background: #3a3e32;
}
.ViewtextBlock{
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;
}
.ViewText{
	font-family: var(--font-family);
font-weight: 600;
font-size: 64px;
color: #d0d1ac;
}
.SecondViewText{
	font-family: var(--font-family);
font-weight: 600;
font-size: 36px;
color: #d0d1ac;
}
.BookBlock{
	width: 406px;
height: 644px
}
.ImageOfViewBlock{
	border-radius: 28px;
width: 406px;
height: 377px;
background-color:#d9d9d9;
}
.GreenBlockView{
	background: #212717;
	width: 406px;
height: 267px;
}
.NameOfBook{
	font-family: var(--font-family);
font-weight: 600;
font-size: 24px;
color: #e8e3d0;
}
.HowItsWorks{
	background-color: #fff;
}
.MainRulesText{
	font-family: var(--font-family);
font-weight: 800;
font-size: 64px;
text-align: center;
color: #212717;
}
.SideRulesText{
	font-family: var(--font-family);
font-weight: 600;
font-size: 36px;
text-align: center;
color: #212717;
}
.Rules{
	display: flex;
	justify-content: space-around;
}
.MainAsideText{
	font-family: var(--font-family);
font-weight: 700;
font-size: 36px;
text-align: center;
color: #212717;
}
.asideText{
	font-family: var(--font-family);
font-weight: 600;
font-size: 24px;
text-align: center;
color: #212717;
}
.otZivi{
	background: #3a3e32;
}
.otZiviText{
display: flex;
flex-direction: column;
justify-content: center;
}
.MianTextOfotZivi{
	font-family: var(--font-family);
font-weight: 700;
font-size: 64px;
text-align: center;
color: #cfd0ab;
}
.SecondTextOfotZivi{
	font-family: var(--font-family);
font-weight: 600;
font-size: 36px;
text-align: center;
color: #cfd0ab;
}
.otZivBlocks{
	display: flex;
	justify-content: space-between;
}
.otZiv{
	border-radius: 30px;
width: 586px;
height: 353px;
background: #212717;
}
</style>
