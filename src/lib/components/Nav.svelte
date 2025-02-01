<script lang="ts">
	//@ts-nocheck
	import List, {
		Item,
		Graphic,
		Separator,
		Meta,
		Text,
		PrimaryText,
		SecondaryText
	} from '@smui/list';
	import Button, { Label } from '@smui/button';
	import { Svg } from '@smui/common';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { profileImage, navList, isAuth } from '$lib/stores';

	$: $isAuth = $page.data.user;
</script>

<nav>
	<div class="top">
		<List>
            <Item on:SMUI:action={() => goto(`/research`)}>
				<Graphic class="material-symbols-outlined">owl</Graphic>
				<Text>Research</Text>
			</Item>
			<Item on:SMUI:action={() => goto(`/courses`)}>
				<Graphic class="material-icons">local_library</Graphic>
				<Text>Courses</Text>
			</Item>
			<Item on:SMUI:action={() => goto(`/students`)}>
				<Graphic class="material-icons">groups</Graphic>
				<Text>Students</Text>
			</Item>
			<Item on:SMUI:action={() => goto(`/talks`)}>
				<Graphic class="material-symbols-outlined">podium</Graphic>
				<Text>Talks</Text>
			</Item>
			<Separator />
			<!-- <Item on:SMUI:action={() => goto(`/about`)}>
				<Graphic class="material-icons">person</Graphic>
				<Text>About</Text>
			</Item> -->
			<Item on:SMUI:action={() => goto(`/publications`)}>
				<Graphic class="material-icons">article</Graphic>
				<Text>Publications</Text>
			</Item>
			<Item on:SMUI:action={() => goto(`/cv`)}>
				<Graphic class="material-icons">badge</Graphic>
				<Text>CV</Text>
			</Item>
			<Item on:SMUI:action={() => (window.location = `/mathril`)}>
				<Graphic>
					<Svg
						style="width: 100%; height: 100%;"
						viewBox="0 0 400 400"
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
					>
						<defs>
							<linearGradient
								id="LinearGradient-VectorialApp19R21-3"
								x1="0%"
								y1="0%"
								x2="100%"
								y2="0%"
							>
								<stop offset="0%" stop-color="rgba(255, 0, 0, 1)" />
								<stop offset="100%" stop-color="rgba(0, 175, 255, 1)" />
							</linearGradient>
						</defs>
						<g>
							<g
								class="draggable"
								id="Layer-VectorialApp19R21-0"
								fill="none"
								stroke="none"
								stroke-width="0"
								stroke-dasharray="none"
								opacity="1"
								mask="none"
								filter="none"
								transform="matrix(1 0 0 1 0 0)"
							>
								<rect
									id="Rect-VectorialApp19R21-2"
									x="200"
									y="200"
									width="350"
									height="25"
									rx="0"
									ry="0"
									fill="url(#LinearGradient-VectorialApp19R21-3)"
									stroke="rgba(0, 0, 0, 1)"
									stroke-width="0"
									stroke-dasharray="none"
									opacity="1"
									filter="none"
									mask="none"
									transform="matrix(1 0 0 1 -176 -175)"
								/>

								<rect
									id="Rect-VectorialApp19R21-4"
									x="200"
									y="200"
									width="350"
									height="25"
									rx="0"
									ry="0"
									fill="url(#LinearGradient-VectorialApp19R21-3)"
									stroke="rgba(0, 0, 0, 1)"
									stroke-width="0"
									stroke-dasharray="none"
									opacity="1"
									filter="none"
									mask="none"
									transform="matrix(1 0 0 1 -175 -125)"
								/>

								<rect
									id="Rect-VectorialApp19R21-5"
									x="200"
									y="200"
									width="275"
									height="25"
									rx="0"
									ry="0"
									fill="url(#LinearGradient-VectorialApp19R21-3)"
									stroke="rgba(0, 0, 0, 1)"
									stroke-width="0"
									stroke-dasharray="none"
									opacity="1"
									filter="none"
									mask="none"
									transform="matrix(1 0 0 1 -175 -75)"
								/>

								<rect
									id="Rect-VectorialApp19R21-6"
									x="200"
									y="200"
									width="200"
									height="25"
									rx="0"
									ry="0"
									fill="url(#LinearGradient-VectorialApp19R21-3)"
									stroke="rgba(0, 0, 0, 1)"
									stroke-width="0"
									stroke-dasharray="none"
									opacity="1"
									filter="none"
									mask="none"
									transform="matrix(1 0 0 1 -175 -25)"
								/>

								<circle
									id="Circle-VectorialApp19R21-7"
									cx="200"
									cy="200"
									r="40"
									fill="rgba(255, 255, 255, 0.3)"
									stroke="rgba(0, 175, 0, 1)"
									stroke-width="5"
									stroke-dasharray="none"
									opacity="1"
									filter="none"
									mask="none"
									transform="matrix(1 0 0 1 -100 75)"
								/>

								<circle
									id="Circle-VectorialApp19R21-8"
									cx="200"
									cy="200"
									r="30"
									fill="rgba(0, 175, 0, 1)"
									stroke="rgba(0, 175, 0, 1)"
									stroke-width="5"
									stroke-dasharray="none"
									opacity="1"
									filter="none"
									mask="none"
									transform="matrix(1 0 0 1 -100 75)"
								/>

								<circle
									id="Circle-VectorialApp19R21-9"
									cx="200"
									cy="200"
									r="25"
									fill="rgba(255, 255, 255, 0)"
									stroke="rgba(0, 175, 255, 1)"
									stroke-width="10"
									stroke-dasharray="none"
									opacity="1"
									filter="none"
									mask="none"
									transform="matrix(1 0 0 1 100.5 75)"
								/>

								<circle
									id="Circle-VectorialApp19R21-10"
									cx="200"
									cy="200"
									r="25"
									fill="rgba(255, 255, 255, 0)"
									stroke="rgba(0, 175, 255, 1)"
									stroke-width="10"
									stroke-dasharray="none"
									opacity="1"
									filter="none"
									mask="none"
									transform="matrix(1 0 0 1 100.5 159)"
								/>

								<circle
									id="Circle-VectorialApp19R21-11"
									cx="200"
									cy="200"
									r="25"
									fill="rgba(255, 255, 255, 0)"
									stroke="rgba(0, 175, 255, 1)"
									stroke-width="10"
									stroke-dasharray="none"
									opacity="1"
									filter="none"
									mask="none"
									transform="matrix(1 0 0 1 -100 159)"
								/>
							</g>
						</g>
					</Svg>
				</Graphic>
				<Text>mathril</Text>
			</Item>
			<Item on:SMUI:action={() => (window.location = `/vectorial`)}>
				<Graphic>
					<Svg
						style="width: 100%; height: 100%;"
						viewBox="-336 -140 224.00000095367432 222.00000286102295"
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						class="s-96Qa8tULeGx4"
					>
						<defs class="s-96Qa8tULeGx4">
							<radialGradient
								id="radGrad604"
								cx="50%"
								cy="50%"
								r="50%"
								fx="50%"
								fy="50%"
								fr="0%"
								class="s-96Qa8tULeGx4"
							>
								<stop offset="0%" stop-color="rgba(0, 0, 0, 0.1)" class="s-96Qa8tULeGx4"></stop>
								<stop offset="100%" stop-color="rgba(0, 0, 0, 1)" class="s-96Qa8tULeGx4"></stop>
							</radialGradient>
							<linearGradient
								id="linGrad990"
								x1="0%"
								y1="0%"
								x2="100%"
								y2="0%"
								class="s-96Qa8tULeGx4"
							>
								<stop offset="0%" stop-color="rgba(255, 0, 0, 1)" class="s-96Qa8tULeGx4"></stop>
								<stop offset="100%" stop-color="rgba(0, 159, 163, 1)" class="s-96Qa8tULeGx4"></stop>
							</linearGradient>
							<filter
								id="shadow183"
								x="0%"
								y="0%"
								width="500%"
								height="500%"
								class="s-2BksElCIcH9B"
							>
								<feDropShadow
									dx="30"
									dy="30"
									stdDeviation="5"
									flood-color="rgba(0, 0, 0, 0.5)"
									flood-opacity="1"
									class="s-2BksElCIcH9B"
								></feDropShadow>
							</filter>
						</defs>
						<g class="s-96Qa8tULeGx4">
							<g
								id="Layer-0"
								fill="none"
								stroke="none"
								stroke-width="0"
								stroke-dasharray="none"
								opacity="1"
								filter="none"
								transform="matrix(1 0 0 1 0 0)"
								class="s-QQIalB0-gg3s"
							>
								<circle
									cx="0"
									cy="0"
									r="100"
									fill="url(#linGrad990)"
									stroke="rgba(0, 0, 0, 1)"
									stroke-width="0"
									stroke-dasharray="none"
									opacity="1"
									filter="none"
									transform="matrix(1 0 0 1 -224 -30)"
									class="s-QOZdKfZP-a_N"
								></circle>
								<g
									id="Latex-3"
									fill="rgba(255, 255, 255, 1)"
									opacity="1"
									filter="url(#shadow183)"
									transform="matrix(0.22421523772725804 0 0 0.22026430842809952 -283.0785199922724 22.28708863364809)"
									class="s-8WhOemGd3PFV"
								>
									<defs>
										<path
											id="MJX-1039-TEX-I-1D463"
											d="M173 380Q173 405 154 405Q130 405 104 376T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Q21 294 29 316T53 368T97 419T160 441Q202 441 225 417T249 361Q249 344 246 335Q246 329 231 291T200 202T182 113Q182 86 187 69Q200 26 250 26Q287 26 319 60T369 139T398 222T409 277Q409 300 401 317T383 343T365 361T357 383Q357 405 376 424T417 443Q436 443 451 425T467 367Q467 340 455 284T418 159T347 40T241 -11Q177 -11 139 22Q102 54 102 117Q102 148 110 181T151 298Q173 362 173 380Z"
										></path>
									</defs>
									<g stroke-width="0" transform="scale(1,-1)">
										<g data-mml-node="math">
											<g data-mml-node="mi">
												<use data-c="1D463" xlink:href="#MJX-1039-TEX-I-1D463"></use>
											</g>
										</g>
									</g>
								</g>
							</g>
						</g>
					</Svg>
				</Graphic>
				<Text>vectorial</Text>
			</Item>
		</List>
	</div>
	<div class="bottom">
		<List twoLine avatarList>
			{#if $isAuth}
				<Item on:click={() => goto(`/${$page.data.user.publicID}`)}>
					<Graphic>
						<img class="round" width="40px" height="40px" src={$profileImage} alt="Profile" />
					</Graphic>
					<Text>
						<PrimaryText>{$isAuth.name}</PrimaryText>
						<SecondaryText>{$isAuth.publicID}</SecondaryText>
					</Text>
				</Item>
			{:else}
				<Item>
					<Button on:click={() => goto('/auth')}>Log in / Sign up</Button>
				</Item>
			{/if}
		</List>
	</div>
</nav>

<style>
	nav {
		/* height: calc(100vh - 5em); */
		/* height: 500px; */
		overflow-y: auto;
		display: flex;
		justify-content: start;
		flex-direction: column;
		/* position: sticky;
        top: 0.5em; */
		padding-bottom: 5em;
	}

	/* .post {
        display: flex;
        justify-content: center;
    } */
</style>
