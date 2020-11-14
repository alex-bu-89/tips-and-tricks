// const candidates = [
//   { id: 1, name: 'Jonh', skills: ['Python', 'Java', 'Go', 'Node', 'Express'] },
//   { id: 2, name: 'Paul', skills: ['Go', 'Python'] },
//   { id: 3, name: 'Ringo', skills: ['Ruby', 'Java', 'Go'] },
//   { id: 4, name: 'George', skills: ['C++', 'Python', 'Java', 'Javascript'] },
//   // { id: 5, name: 'Yoko', skills: ['Javascript', 'Node'] },
// ];

function generateCandidates(count) {
  console.time('generate');
  const names = ['Jonh', 'Paul', 'Ringo', 'George']
  const skills = ['Python', 'Java', 'Go', 'Node', 'Express', 'Ruby', 'C++', 'Javascript']
  const getRandomByRange = (range) => Math.floor(Math.random() * range) + 1;
  
  const candidates = Array(count).fill().map((_, i) => {
    return {
      id: i + 1,
      name: names[getRandomByRange(names.length) - 1],
      skills: Array(getRandomByRange(skills.length)).fill().map((_, i) => {
        return skills[getRandomByRange(skills.length) - 1];
      }).filter((skill, index, arr) => {
        return arr.indexOf(skill) == index;
      })
    }
  });

  console.timeEnd('generate');
  return candidates;
}

function findAllBySkills(candidates, skills) {
  return candidates.reduce((acc, candidate) => {
    const matched = candidate.skills.filter(s => skills.includes(s));
    candidate.matchingIndex = matched.length;
    if (matched.length) acc.push(candidate);
    return acc;
  }, [])
  .sort((a, b) => {
    return b.matchingIndex - a.matchingIndex;
  })
  .map((candidate) => {
    delete candidate.matchingIndex;
    return candidate;
  });
}

function findOneBySkills(candidates, skills) {
  let foundCandidate = null;
  let foundSkills = 0;
  
  candidates.forEach((candidate) => {
      const matched = candidate.skills.filter((s) => skills.includes(s));
      if (matched.length > foundSkills) {
          foundCandidate = candidate;
          foundSkills = matched.length;
      }
  });

  return foundCandidate;
}

// generate candidates
const candidates = generateCandidates(1000000);

console.time('findAllBySkills');
const result = findAllBySkills(candidates, ['Javascript', 'Node', 'Go']);
console.timeEnd('findAllBySkills');

console.time('findOneBySkills');
const result2 = findOneBySkills(candidates, ['Javascript', 'Node', 'Go']);
console.timeEnd('findOneBySkills');

console.log('candidates.length', candidates.length);