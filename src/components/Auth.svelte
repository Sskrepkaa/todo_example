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
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" bind:value={email} required />
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" bind:value={password} required />
      </div>
    
      <button type="submit" class="btn btn-primary">Login</button>
    </form>