const packages = [{
  priorityLevel: 'express',
  isFragile: false,
  weight: 2,
  to: 'Sir Harrington IV',
  trackingNumber: '1324kjs'
},
{
  priorityLevel: 'standard',
  isFragile: true,
  weight: .5,
  to: 'Master Mercutio',
  trackingNumber: '1325sdk'
},
{
  priorityLevel: 'free',
  isFragile: true,
  weight: .5,
  to: 'Mistress Ravenfeather',
  trackingNumber: 'jffd147'
},
{
  priorityLevel: 'standard',
  isFragile: false,
  weight: 4,
  to: 'B. Robert Brown',
  trackingNumber: 'acdc145'
},
{
  priorityLevel: 'express',
  isFragile: true,
  weight: 6,
  to: 'Chancellor Wallace',
  trackingNumber: '4b2l0z'
},
{
  priorityLevel: 'standard',
  isFragile: false,
  weight: 5,
  to: 'Sarah Sharm',
  trackingNumber: '8081baz'
},
{
  priorityLevel: 'free',
  isFragile: true,
  weight: 12,
  to: 'Tae Lien',
  trackingNumber: 'suz2367'
}]


function drawPackages(packages) {
  const packageElem = document.getElementById("packages")
  let template = ''
  packages.forEach(package => {
    template += `${package.trackingNumber}
      `
  });
  packageElem.innerText = template
}

function drawFragilePackages() {
  const fragilePackages = packages.filter(x => x.isFragile === true)
  drawPackages(fragilePackages)
}

function sendPackage() {
  const sendingElem = document.getElementById("send-package")
  let randomPackage = Math.floor(Math.random() * packages.length)
  let sentPackage = packages[randomPackage]
  let template = `${sentPackage.trackingNumber} - ${sentPackage.to}`
  sendingElem.innerText = template
}

function drawAllPackages() {
  drawPackages(packages)
}

