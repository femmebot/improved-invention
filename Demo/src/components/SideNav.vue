<script setup>
// import { ref } from 'vue'

defineProps({
  // msg: String
})

// const count = ref(0)
</script>

<template>

  <div class="">

    <nav id="sidenav" >
      <ul>
        <li>
          <a href="#" class="active">
            <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><rect x="7" y="7" width="3" height="9"></rect>
              <rect x="14" y="7" width="3" height="5"></rect>
            </svg>
            Dashboard
          </a>
        </li>

        <li>
          <a href="#">
            <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line>
            </svg>
            Training
          </a>
        </li>

        <li id="nav-people">
          <a href="#">
            <svg viewBox="0 0 12 12" class="nav-caret" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4.5 9L7.5 6L4.5 3" />
            </svg>
            <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>
            </svg>
            People
          </a>
        </li>

        <!-- <ul class="sidenav__sublist">
          <li>
            <a>Members</a>
          </li>
          <li>
            <a>Teams</a>
          </li>
        </ul> -->

        <li id="nav-reports">
          <a href="#">
            <svg viewBox="0 0 12 12" class="nav-caret" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4.5 9L7.5 6L4.5 3" />
            </svg>
            <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1">
              <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline>
            </svg>
            Reports
          </a>
        </li>

        <!-- <ul class="sidenav__sublist">
          <li>
            <a>Training reports</a>
          </li>
          <li>
            <a>Impact report</a>
          </li>
          <li>
            <a>Rewards</a>
          </li>
          <li>
            <a>Certificate (PDF)</a>
          </li>
          <li>
            <a>Activity</a>
          </li>
        </ul> -->

        <li id="nav-settings">
          <a href="#">

            <svg viewBox="0 0 12 12" class="nav-caret" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4.5 9L7.5 6L4.5 3" />
            </svg>

            <!-- <svg viewBox="0 0 12 12" class="nav-caret" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M3 4.5L6 7.5L9 4.5"/>
            </svg> -->

            <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="3"></circle>
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
            </svg>
            Settings
          </a>
        </li>

        <!-- <ul class="sidenav__sublist">
          <li>
            <a class="active">General</a>
          </li>
          <li>
            <a>Automation</a>
          </li>
          <li>
            <a>Notifications</a>
          </li>
          <li>
            <a>Rewards</a>
          </li>
        </ul> -->

        <hr class="my-4 dark:border-gray-600"/>
        <li>
          <a href="#">
            <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
            </svg>
            Documentation
          </a>
        </li>
        <li>
          <a href="#">
            <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.9189 8.57474L2.41888 12.2414L8.9189 16.0747" />
              <path d="M16.7381 8.57474L23.2382 12.2414L16.7381 16.0747" />
              <path d="M14.8916 5.40802L10.8915 19.408" />
            </svg>
            API
          </a>
        </li>
      </ul>
    </nav>

  </div>
</template>

<style scoped>

</style>
