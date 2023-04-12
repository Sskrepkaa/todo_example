<script> 
    import {supabase} from "../lib/supabaseClient";
    import {user} from "../store/authStore.js"

    const logout = () => {
        supabase.auth.signOut() 
    }
</script>

<div class="d-grid gap-2 d-md-flex justify-content-md-end">
    <p>{user}</p>
    <button type="button" class="btn btn-dark" on:click={logout}>
        Logout
    </button>
</div>