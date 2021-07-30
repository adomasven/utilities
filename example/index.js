/*
	***** BEGIN LICENSE BLOCK *****
	
	Copyright © 2019 Center for History and New Media
					George Mason University, Fairfax, Virginia, USA
					http://zotero.org
	
	This file is part of Zotero.
	
	Zotero is free software: you can redistribute it and/or modify
	it under the terms of the GNU Affero General Public License as published by
	the Free Software Foundation, either version 3 of the License, or
	(at your option) any later version.
	
	Zotero is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	GNU Affero General Public License for more details.

	You should have received a copy of the GNU Affero General Public License
	along with Zotero.  If not, see <http://www.gnu.org/licenses/>.
	
	***** END LICENSE BLOCK *****
*/

var Zotero = {};

let sampleJSON = {
	"key": "QIT3EPWR",
	"version": 118,
	"itemType": "webpage",
	"title": "Hilabliss - Self-contained educational implementation of the BLISS-B Bimodal Lattice Signature Scheme",
	"creators": [
		{
			"creatorType": "author",
			"firstName": "Markku-Juhani O.",
			"lastName": "Saarinen"
		}
	],
	"abstractNote": "hilabliss - Self-contained educational implementation of the BLISS-B Bimodal Lattice Signature Scheme",
	"websiteTitle": "GitHub",
	"websiteType": "",
	"date": "2016",
	"shortTitle": "",
	"url": "https://github.com/mjosaarinen/hilabliss",
	"accessDate": "2016-04-23T18:42:14Z",
	"language": "",
	"rights": "",
	"extra": "",
	"tags": [],
	"collections": [
		"X568F7WA"
	],
	"relations": {},
	"dateAdded": "2016-04-23T18:42:14Z",
	"dateModified": "2016-04-23T18:43:31Z"
}

window.doConvert = async function translate() {
	let json = document.querySelector('#json').value;
	if (!json) {
		json = sampleJSON;
	}
	json.uri = `https://www.zotero.org/${json.key}`;

	setResult(JSON.stringify(Zotero.Utilities.Item.itemToCSLJSON(json)));
};

function setResult(str) {
	document.querySelector('#result').innerHTML = str.toString();
}

window.addEventListener('DOMContentLoaded', async function() {
	response = await fetch('https://api.zotero.org/schema');
	Zotero.Schema.init(await response.json());
});