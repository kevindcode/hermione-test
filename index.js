const Hermione = require("hermione");

function addHermioneEventHandlers(hermione) {
  hermione.on(hermione.events.RUNNER_START, () => {
    console.log("Hermione RUNNER_START event fired");
  });

  hermione.on(hermione.events.RUNNER_END, () => {
    console.log("Hermione RUNNER_END event fired");
  });
}

function main() {
  const hermione = new Hermione("./tools/hermione/hermione.conf.js");
  addHermioneEventHandlers(hermione);

  hermione.init().done();
}

main();
