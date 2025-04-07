<script>
	import { BookOpen } from 'lucide-svelte';
</script>

<footer class="bg-walnut-dark border-t py-6 md:py-8">
	<div class=" flex flex-col gap-4 px-6 md:px-12">
		<div class="flex flex-col justify-between gap-4 md:flex-row">
			<div class="space-y-4">
				<a href="/" class="flex items-center gap-2">
					<BookOpen class="text-walnut-light h-5 w-5" />
					<span class="text-walnut-light font-bold">Vigis</span>
				</a>
				<span class="text-walnut-light/70 max-w-xs text-sm">
					Платформа для обмена книгами между любителями чтения по всей стране
				</span>
			</div>
			<div class="grid grid-cols-2 gap-8 md:grid-cols-4">
				<div class="space-y-2">
					<h4 class="text-walnut-light text-sm font-medium">Платформа</h4>
					<ul class="space-y-2 text-sm">
						<li>
							<a href="/catalog" class="text-walnut-light/70 hover:text-walnut-light">
								Каталог книг
							</a>
						</li>
						<li>
							<a
								href="/how-it-works"
								class="text-walnut-light/70 hover:text-walnut-light"
							>
								Как это работает
							</a>
						</li>
						<li>
							<a
								href="/communities"
								class="text-walnut-light/70 hover:text-walnut-light"
							>
								Сообщества
							</a>
						</li>
					</ul>
				</div>
				<div class="space-y-2">
					<h4 class="text-walnut-light text-sm font-medium">Поддержка</h4>
					<ul class="space-y-2 text-sm">
						<li>
							<a href="/faq" class="text-walnut-light/70 hover:text-walnut-light">
								Частые вопросы
							</a>
						</li>
						<li>
							<a href="/contact" class="text-walnut-light/70 hover:text-walnut-light">
								Связаться с нами
							</a>
						</li>
						<li>
							<a href="/rules" class="text-walnut-light/70 hover:text-walnut-light">
								Правила обмена
							</a>
						</li>
					</ul>
				</div>
				<div class="space-y-2">
					<h4 class="text-walnut-light text-sm font-medium">Компания</h4>
					<ul class="space-y-2 text-sm">
						<li>
							<a href="/about" class="text-walnut-light/70 hover:text-walnut-light">
								О проекте
							</a>
						</li>
						<li>
							<a href="/blog" class="text-walnut-light/70 hover:text-walnut-light">
								Блог
							</a>
						</li>
						<li>
							<a
								href="/partners"
								class="text-walnut-light/70 hover:text-walnut-light"
							>
								Партнеры
							</a>
						</li>
					</ul>
				</div>
				<div class="space-y-2">
					<h4 class="text-walnut-light text-sm font-medium">Правовая информация</h4>
					<ul class="space-y-2 text-sm">
						<li>
							<a href="/terms" class="text-walnut-light/70 hover:text-walnut-light">
								Условия использования
							</a>
						</li>
						<li>
							<a href="/privacy" class="text-walnut-light/70 hover:text-walnut-light">
								Политика конфиденциальности
							</a>
						</li>
						<li>
							<a href="/cookies" class="text-walnut-light/70 hover:text-walnut-light">
								Политика cookies
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div
			class="border-muted-700 flex flex-col items-center justify-between gap-4 border-t pt-4 md:flex-row"
		>
			<span class="text-walnut-light/70 text-xs">© 2025 Vigis. Все права защищены.</span>
			<div class="flex items-center gap-4">
				<a href="#" class="text-walnut-light/70 hover:text-walnut-light">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="h-5 w-5"
					>
						<path
							d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
						/>
					</svg>
					<span class="sr-only">Facebook</span>
				</a>
				<a href="#" class="text-walnut-light/70 hover:text-walnut-light">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="h-5 w-5"
					>
						<rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
						<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
						<line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
					</svg>
					<span class="sr-only">Instagram</span>
				</a>
				<a href="#" class="text-walnut-light/70 hover:text-walnut-light">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="h-5 w-5"
					>
						<path
							d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"
						/>
					</svg>
					<span class="sr-only">Twitter</span>
				</a>
				<a href="#" class="text-walnut-light/70 hover:text-walnut-light">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="h-5 w-5"
					>
						<path
							d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
						/>
						<rect width="4" height="12" x="2" y="9" />
						<circle cx="4" cy="4" r="2" />
					</svg>
					<span class="sr-only">aedIn</span>
				</a>
			</div>
		</div>
	</div>
</footer>
