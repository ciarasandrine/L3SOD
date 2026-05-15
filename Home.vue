<template>
 <div id="app">

 
  <section class="hero">

    <h1>
      Welcome,
      <span>{{ studentName }}</span>!
    </h1>

    <p class="subtitle">
      Track Your Academic Progress and Achievements in One Place
    </p>

  </section>

 
  <section class="stats-section">

  </section>

    <div class="container">

    </div>

      <div class="stats-grid">
      </div>

        <div class="stat-card">

          <div class="stat-number">
            {{ totalSubjects }}
          </div>

          <div class="stat-label">
            Subjects
          </div>

        </div>

        <div class="stat-card">
         </div>
         
         <div class="stat-number">
            {{ average }}
        </div>

        </div class="stat-label">
          Average grade
       

       <div class="stat-card">

        <div class="stat-number">
            {{ gpa }}
        </div>

       <div class="stat-label">
          GPA (out of 4)
       </div>
       
    </div>

    <div class="stat-card">

        <div class="stat-number">
            {{ Credits }}
        </div>
        <div class="stat-label">
            credits
        </div>
    </div>

    <footer class="footer">

       <p>&copy; 2026 Edu-Track. All rights reserved. Level Iga-Now Tech Program Internship</p> 

    </footer>
</template>


   