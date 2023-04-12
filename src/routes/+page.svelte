<script>
	import {todos} from "../store/todoStore"
</script>

<svelte:head>
	<title>User Management</title>
</svelte:head>

<!-- <div class="row flex-center flex">
	<div class="col-6 form-widget">
		<Auth
			supabaseClient={data.supabase}
			view="magic_link"
			redirectTo={`${data.url}/logging-in?redirect=/`}
			showLinks={false}
			appearance={{ theme: ThemeSupa, style: { input: 'color: #fff' } }}
		/>
	</div>
</div> -->

<div class="container">
    <h1>Welcome to SvelteKit</h1>
    <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
    <a href="/login">Login</a>
    {todos}
	<slot></slot>
</div>