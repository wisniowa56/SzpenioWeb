<script lang="ts">
	import { Navbar, Footer } from "$lib/component";
	import "../app.css";
</script>

<Navbar />
<div class="px-5 min-h-[96vh]">
	<slot />
</div>
<Footer />
