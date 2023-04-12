<script>
  import { supabase } from "$lib/supabaseClient";
    let email = '';
    let password = '';
  
    async function handleSubmit() {
      console.log("auth", email, password);
      const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })
  
      if (data) {
        console.log("auth ok", data);
      } else {
        console.log("auth err ", error);
      }
    }
  </script>
  
  <h1>Login</h1>
  
  <form on:submit|preventDefault={handleSubmit}>
    <label>
      Email:
      <input type="email" bind:value={email} required />
    </label>
  
    <label>
      Password:
      <input type="password" bind:value={password} required />
    </label>
  
    <button type="submit">Login</button>
  </form>
  