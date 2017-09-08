// Copyright (C) 2012-present, Polis Technology Inc. This program is free software: you can redistribute it and/or  modify it under the terms of the GNU Affero General Public License, version 3, as published by the Free Software Foundation. This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU Affero General Public License for more details. You should have received a copy of the GNU Affero General Public License along with this program.  If not, see <http://www.gnu.org/licenses/>.

// build may prepend 'devWithPreprod'
var availableDomains = {
  prod: "https://polis.brasilqueopovoquer.org.br/",
  preprod: "https://devpolis.brasilqueopovoquer.org.br/",
  embed: "https://polis.brasilqueopovoquer.org.br/",
  survey: "https://survey.pol.is/",
  localhost: "http://localhost:5000/"
};

var urlPrefix = availableDomains.prod;
Object.keys(availableDomains).forEach( function(key){
  if(document.domain.match(new RegExp(availableDomains[key].replace(
    /\w+:\/\/([\w.]+)\W.*/, "$1")))){
    urlPrefix = availableDomains[key];
  }
});

function isPreprod() {
  return urlPrefix === availableDomains.preprod;
}

function isLocalhost() {
  return urlPrefix === availableDomains.localhost;
}

module.exports = {
  urlPrefix: urlPrefix,
  isPreprod: isPreprod,
  isLocalhost: isLocalhost
};
