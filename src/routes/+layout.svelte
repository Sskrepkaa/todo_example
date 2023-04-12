<script>
	import {supabase} from "../lib/supabaseClient";
	import Auth from "../components/Auth.svelte";
	import Navbar from "../components/Navbar.svelte";
	import 'bootstrap/dist/css/bootstrap.min.css';
	import {user} from "../store/authStore.js"
	import {todos, loadTodos} from "../store/todoStore.js"
    //import { SupabaseAuthClient } from "@supabase/supabase-js/dist/module/lib/SupabaseAuthClient";
	//console.log(supabase.auth.user())
	//user.set(supabase.auth.user());
	//SupabaseAuthClient.auth.user();

	supabase.auth.onAuthStateChange((_,session) => {
		user.set(session?.user)
		if(session?.user) {
			console.log("here");
			loadTodos(todos);
		}
	})
</script>




<div class="container" style="padding: 50px 0 100px 0">
	{#if $user}
	<Navbar />
	<slot></slot>
	{:else}
	<Auth />
	{/if}
</div>
