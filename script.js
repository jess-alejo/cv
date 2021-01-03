const noviceSkillLevels = document.querySelectorAll(".skill-level--novice")
const intermediateSkillLevels = document.querySelectorAll(
  ".skill-level--intermediate"
)
const advancedSkillLevels = document.querySelectorAll(".skill-level--advanced")
const basicSkillLevels = document.querySelectorAll(".skill-level--basic")

noviceSkillLevels.forEach(skill => {
  skill.innerHTML = `
  <small class="text-muted skill-label">Novice</small>
  <div class="progress skill-level">
    <div
      class="progress-bar bg-profile-success"
      style="width: 40%"
      title="Novice (limited experience)"
    ></div>
  </div>
  `
})

intermediateSkillLevels.forEach(skill => {
  skill.innerHTML = `
  <small class="text-muted skill-label">Intermediate</small>
  <div class="progress skill-level">
    <div
      class="progress-bar bg-profile-success"
      style="width: 60%"
      title="Intermediate (practical application)"
    ></div>
  </div>
  `
})

advancedSkillLevels.forEach(skill => {
  skill.innerHTML = `
  <small class="text-muted skill-label">Advanced</small>
  <div class="progress skill-level">
    <div
      class="progress-bar bg-profile-success"
      style="width: 80%"
      title="Advanced (applied theory)"
    ></div>
  </div>
  `
})

basicSkillLevels.forEach(skill => {
  skill.innerHTML = `
  <small class="text-muted skill-label">Fundamental Awareness</small>
  <div class="progress skill-level">
    <div
      class="progress-bar bg-profile-success"
      style="width: 20%"
      title="Fundamental Awareness (basic knowledge)"
    ></div>
  </div>
  `
})
