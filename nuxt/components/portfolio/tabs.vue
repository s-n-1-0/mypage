<template>
    <nav>
        <div class="nav nav-tabs" id="nav-tab" role="tablist">
            <a class="nav-link offcanvas-nav-item nav-link-app" href="#appsBlock">App</a>
            <a class="nav-link offcanvas-nav-item nav-link-art" href="#artBlock">Art</a>
            <a class="nav-link offcanvas-nav-item" href="#codeBlock">Code</a>
        </div>
    </nav>
</template>
<style scoped>
.offcanvas-nav-item{
  color: white;
}
.nav-link-app.active:after{
  content: "s";
}
.nav-link-art.active:after{
content: "work";
}
</style>