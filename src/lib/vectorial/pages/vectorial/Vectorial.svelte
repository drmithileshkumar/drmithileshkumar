<script id="MathJax-script" lang="ts">
	//@ts-nocheck
	import { createEventDispatcher } from 'svelte';
	import {
		onSVG,
		pathMode,
		lassoElements,
		showBBoxControls,
		addingNodes,
		PAN,
		panX,
		panY,
		Z,
		screenCTM,
		svg,
		canvasBackground,
		DRAWING,
		objectCount,
		selectionMode,
		selectedElement,
		selectedId,
		selectedVertex,
		selectedControl0,
		selectedControl1,
		currentLayer,
		appHistory,
		currentState,
		activeElement,
		BBOX,
		symbols,
		showControls,
		showGuides,
		boundingBox
	} from '$lib/vectorial/pages/vectorial/stores';
	import {
		defs,
		elements,
		elementsNode,
		symbol,
		mirrorVertex,
		mirrorMode,
		circleMode,
		circledVertices,
		circleCenter
	} from '$lib/vectorial/pages/vectorial/stores';
	// import {typeset} from '$lib/vectorial/shared/typeset';
	//import stores
	import { onMount } from 'svelte';
	import MenuSurface from '@smui/menu-surface';
	import Card, { Content, Actions } from '@smui/card';
	import Button, { Label } from '@smui/button';
	import Textfield from '@smui/textfield';
	import { Point } from '$lib/vectorial/utils/common/point';
	import ContextBox from '$lib/vectorial/pages/vectorial/ContextBox.svelte';
	import ContextActions from '$lib/vectorial/pages/vectorial/ContextActions.svelte';
	import SVGGroup from '$lib/vectorial/pages/vectorial/SVGGroup.svelte';

	import SVGShadow from '$lib/vectorial/pages/vectorial/SVGShadow.svelte';
	import SVGBlur from '$lib/vectorial/pages/vectorial/SVGBlur.svelte';
	import SVGPattern from '$lib/vectorial/pages/vectorial/SVGPattern.svelte';
	import SVGMarker from '$lib/vectorial/pages/vectorial/SVGMarker.svelte';
	import SVGSpecularLighting from '$lib/vectorial/pages/vectorial/SVGSpecularLighting.svelte';
	import SVGDiffuseLighting from '$lib/vectorial/pages/vectorial/SVGDiffuseLighting.svelte';
	import SVGTextMask from '$lib/vectorial/pages/vectorial/SVGTextMask.svelte';
	import { selectedElements, selectedVertices } from './stores';

	// export let sourceApp = "Vectorial";
	// export let dispatchUrl = `/${$page.data.user.publicID}/drawings`;
	let dispatch = createEventDispatcher();
	let showContextBox = true;
	onMount(() => {
		MathJax.typeset();

		// hydrateElements();
		// hydrateElementData();
	});

	let isRotating = false,
		stateChanged = false;

	let rotationMode = false;
	let contextActions, contextContent, contextBox, boxVisibility;
	let showVirtualVertex = false,
		virtualVertex = null;

	const stretch = (id) => {
		if (id.split('-')[0] === 'Group') {
			$elements[id].stretchNodes();
			$elements = $elements;
			for (let i = 0; i < $elements[id].treeNode.elements.length; i++) {
				stretch($elements[id].treeNode.elements[i].id);
			}
		} else {
			$elements[id].stretchNodes();
			$elements = $elements;
		}
	};

	const translate = (id, dx, dy) => {
		if (id.split('-')[0] === 'Group') {
			$elements[id].translate(dx, dy);
			for (let i = 0; i < $elements[id].treeNode.elements.length; i++) {
				translate($elements[id].treeNode.elements[i].id, dx, dy);
			}
		} else {
			$elements[id].translate(dx, dy);
		}
	};
	const rotateAngle = (id, theta, axisx, axisy) => {
		if (id.split('-')[0] === 'Group') {
			for (let i = 0; i < $elements[id].treeNode.elements.length; i++) {
				rotateAngle($elements[id].treeNode.elements[i].id, theta, axisx, axisy);
			}
		} else {
			$elements[id].rotate(theta, axisx, axisy);
		}
	};
	const rotate = (id, coord, dx, dy) => {
		//small angles
		//compute angle
		let DX = coord.x - $elements[id].axisx;
		let DY = coord.y - $elements[id].axisy;
		let r = Math.sqrt(DX * DX + DY * DY);
		let dr = Math.sqrt(dx * dx + dy * dy);
		let sign = 1;
		if (DX >= 0 && DY >= 0) {
			if (dy <= dx) sign = -1;
		}
		if (DX < 0 && DY > 0) {
			if (dy >= -dx) sign = -1;
		}
		if (DX < 0 && DY < 0) {
			if (dy >= dx) sign = -1;
		}
		if (DX > 0 && DY < 0) {
			if (dy <= -dx) sign = -1;
		}
		let theta = (sign * dr) / r;
		rotateAngle(id, theta, $elements[id].axisx, $elements[id].axisy);
	};

	const updateSelectionBox = (id) => {
		$elements[id].sbox.tl.x =
			$elements[id].bbox.x * $elements[id].ctm.a +
			$elements[id].bbox.y * $elements[id].ctm.c +
			$elements[id].ctm.e;
		$elements[id].sbox.tl.y =
			$elements[id].bbox.x * $elements[id].ctm.b +
			$elements[id].bbox.y * $elements[id].ctm.d +
			$elements[id].ctm.f;

		$elements[id].sbox.tr.x =
			($elements[id].bbox.x + $elements[id].bbox.width) * $elements[id].ctm.a +
			$elements[id].bbox.y * $elements[id].ctm.c +
			$elements[id].ctm.e;
		$elements[id].sbox.tr.y =
			($elements[id].bbox.x + $elements[id].bbox.width) * $elements[id].ctm.b +
			$elements[id].bbox.y * $elements[id].ctm.d +
			$elements[id].ctm.f;

		$elements[id].sbox.bl.x =
			$elements[id].bbox.x * $elements[id].ctm.a +
			($elements[id].bbox.y + $elements[id].bbox.height) * $elements[id].ctm.c +
			$elements[id].ctm.e;
		$elements[id].sbox.bl.y =
			$elements[id].bbox.x * $elements[id].ctm.b +
			($elements[id].bbox.y + $elements[id].bbox.height) * $elements[id].ctm.d +
			$elements[id].ctm.f;

		$elements[id].sbox.br.x =
			($elements[id].bbox.x + $elements[id].bbox.width) * $elements[id].ctm.a +
			($elements[id].bbox.y + $elements[id].bbox.height) * $elements[id].ctm.c +
			$elements[id].ctm.e;
		$elements[id].sbox.br.y =
			($elements[id].bbox.x + $elements[id].bbox.width) * $elements[id].ctm.b +
			($elements[id].bbox.y + $elements[id].bbox.height) * $elements[id].ctm.d +
			$elements[id].ctm.f;

		$elements = $elements;
	};

	const rotateObject = (coord, change) => {
		let dx = change.x;
		let dy = change.y;
		let cx = $elements[$selectedId].axis.x;
		let cy = $elements[$selectedId].axis.y;
		let DX = coord.x - cx;
		let DY = coord.y - cy;
		let r = Math.sqrt(DX * DX + DY * DY);
		if (r < 5) return;
		let dr = Math.sqrt(dx * dx + dy * dy);
		let sign = 1;
		if (DX >= 0 && DY >= 0) {
			if (dy <= dx) sign = -1;
		}
		if (DX < 0 && DY > 0) {
			if (dy >= -dx) sign = -1;
		}
		if (DX < 0 && DY < 0) {
			if (dy >= dx) sign = -1;
		}
		if (DX > 0 && DY < 0) {
			if (dy <= -dx) sign = -1;
		}
		let theta = (sign * dr) / r;

		$elements[$selectedId].rotate(theta, $elements[$selectedId].axis);
		if ($selectedId === 'lasso') {
			$lassoElements.forEach((elementId) => {
				$elements[elementId].rotate(theta, $elements[$selectedId].axis);
			});
		}

		$elements = $elements;
	};
	const transformVector = (vec, tm) => {
		return new Point(tm.a * vec.x + tm.c * vec.y + tm.e, tm.b * vec.x + tm.d * vec.y + tm.f);
	};
	const scaleElement = (id, coord, offset, change, fixedPoint) => {
		if (change.x === 0 && change.y === 0) return;
		// let inv = $elements[id].tm.inverse();
		// let fixedPoint1 = transformVector(fixedPoint, inv);
		// let coord1 = transformVector(coord, inv);
		// let offset1 = transformVector(offset, inv);
		// let change1 = {
		//     x: coord1.x - offset1.x,
		//     y: coord1.y - offset1.y
		// };
		let scalex = 1;
		let scaley = 1;
		let W = Math.abs(fixedPoint.x - offset.x);
		let H = Math.abs(fixedPoint.y - offset.y);
		let nW = Math.abs(fixedPoint.x - coord.x);
		let nH = Math.abs(fixedPoint.y - coord.y);
		scalex = nW / W;
		scaley = nH / H;
		$elements[id].scalePost(scalex, scaley, fixedPoint);
	};
	const scaleObject = (coord, offset, change, constraint) => {
		if (change.x === 0 && change.y === 0) return;
		let inv = $elements[$selectedId].tm.inverse();

		let coord1 = transformVector(coord, inv);
		let offset1 = transformVector(offset, inv);
		let change1 = {
			x: coord1.x - offset1.x,
			y: coord1.y - offset1.y
		};
		let scalex = 1;
		let scaley = 1;
		let newHeight = $elements[$selectedId].bbox.height;
		let newWidth = $elements[$selectedId].bbox.width;
		let fixedPoint = {
			x: $elements[$selectedId].bbox.x,
			y: $elements[$selectedId].bbox.y
		};
		let fp = {
			x: $elements[$selectedId].sbox.tl.x,
			y: $elements[$selectedId].sbox.tl.y
		};
		switch (constraint) {
			case 'bottommid': {
				scaley = 1 + change1.y / $elements[$selectedId].bbox.height;
				scalex = $elements[$selectedId].preserveAspect ? scaley : scalex;
				newHeight += change1.y;
				break;
			}
			case 'midright': {
				scalex = 1 + change1.x / $elements[$selectedId].bbox.width;
				scaley = $elements[$selectedId].preserveAspect ? scalex : scaley;
				newWidth += change1.x;
				break;
			}
			case 'midleft': {
				fixedPoint.x = fixedPoint.x + newWidth;
				fp.x = $elements[$selectedId].sbox.tr.x;
				scalex = 1 - change1.x / $elements[$selectedId].bbox.width;
				scaley = $elements[$selectedId].preserveAspect ? scalex : scaley;
				newWidth -= change1.x;
				break;
			}
			case 'topmid': {
				fixedPoint.y = fixedPoint.y + newHeight;
				fp.y = $elements[$selectedId].sbox.bl.y;
				scaley = 1 - change1.y / $elements[$selectedId].bbox.height;
				scalex = $elements[$selectedId].preserveAspect ? scaley : scalex;
				newHeight -= change1.y;
				break;
			}
			case 'bottomright': {
				scalex = 1 + change1.x / $elements[$selectedId].bbox.width;
				scaley = 1 + change1.y / $elements[$selectedId].bbox.height;
				scalex = $elements[$selectedId].preserveAspect ? scaley : scalex;
				newWidth += change1.x;
				newHeight += change1.y;
				break;
			}
			case 'bottomleft': {
				fixedPoint.x = fixedPoint.x + newWidth;
				fp.x = $elements[$selectedId].sbox.tr.x;
				scalex = 1 - change1.x / $elements[$selectedId].bbox.width;
				scaley = 1 + change1.y / $elements[$selectedId].bbox.height;
				scalex = $elements[$selectedId].preserveAspect ? scaley : scalex;
				newWidth -= change1.x;
				newHeight += change1.y;
				break;
			}
			case 'topright': {
				fixedPoint.y = fixedPoint.y + newHeight;
				fp.y = $elements[$selectedId].sbox.bl.y;
				scalex = 1 + change1.x / $elements[$selectedId].bbox.width;
				scaley = 1 - change1.y / $elements[$selectedId].bbox.height;
				scalex = $elements[$selectedId].preserveAspect ? scaley : scalex;
				newWidth += change1.x;
				newHeight -= change1.y;
				break;
			}
			case 'topleft': {
				fixedPoint.x = fixedPoint.x + newWidth;
				fixedPoint.y = fixedPoint.y + newHeight;
				fp.x = $elements[$selectedId].sbox.tr.x;
				fp.y = $elements[$selectedId].sbox.bl.y;
				scalex = 1 - change1.x / $elements[$selectedId].bbox.width;
				scaley = 1 - change1.y / $elements[$selectedId].bbox.height;
				scalex = $elements[$selectedId].preserveAspect ? scaley : scalex;
				newWidth -= change1.x;
				newHeight -= change1.y;
				break;
			}
		}
		$elements[$selectedId].scale(scalex, scaley, fixedPoint);
		$elements[$selectedId].scaleSbox(change.x, change.y, constraint);
		// if($selectedId === 'lasso') {
		//     $lassoElements.forEach(elementId => {
		//         scaleElement(elementId, coord, offset, change, fp);
		//         $elements[elementId].scalePost(scalex, scaley, fixedPoint)
		//         $elements[elementId].scaleSbox(change.x, change.y, constraint);
		//     })
		// }

		$elements = $elements;
	};
	const addNewVertex = () => {
		$elements[$selectedId].addVertex($selectedVertex, virtualVertex.v);
		showVirtualVertex = false;
		$elements = $elements;
	};
	const computePatternViewBox = (id, sbox) => {
		let xvalues = [sbox.tl.x, sbox.tr.x, sbox.bl.x, sbox.br.x];
		let yvalues = [sbox.tl.y, sbox.tr.y, sbox.bl.y, sbox.br.y];
		let xmin = Math.min(...xvalues);
		let xmax = Math.max(...xvalues);
		let ymin = Math.min(...yvalues);
		let ymax = Math.max(...yvalues);
		if ($elements[id].tag === 'g' && $elements[id].patternId) {
			$defs[$elements[id].patternId].viewBox =
				xmin + ' ' + ymin + ' ' + (xmax - xmin) + ' ' + (ymax - ymin);
			$defs = $defs;
		}
	};
	$: if ($boundingBox) $screenCTM = $boundingBox.getScreenCTM().inverse();
	export function makeDraggable(node) {
		node.addEventListener(
			'touchstart',
			function (e) {
				e.preventDefault();
			},
			false
		);
		node.addEventListener('pointerdown', startDrag, false);
		node.addEventListener('pointerup', endDrag, false);
		node.addEventListener('pointerleave', endDrag, false);
		node.addEventListener('pointercancel', endDrag, false);
		node.addEventListener('pointermove', drag, false);
		let dragOffset;
		let isDragging = false;
		let isScaling = false;
		let scaleNode = '';
		let handeledByTouch = false;
		function getPointerPosition(evt) {
			let clientx = evt.clientX;
			let clienty = evt.clientY;
			return {
				x: $screenCTM.a * clientx + $screenCTM.c * clienty + $screenCTM.e,
				y: $screenCTM.b * clientx + $screenCTM.d * clienty + $screenCTM.f
			};
		}
		function startDrag(evt) {
			// console.log(evt.target)
			evt.preventDefault();
			let target = evt.target;
			// if(!(target && target.classList && (target.classList.contains('Vectorial') || target.classList.contains('draggable')))) return;
			// console.log(target);
			if ($pathMode) return;

			if (!target) return;
			let targetId = target.getAttribute('id');
			if (targetId === 'NewPoint') return;
			if (target.classList.contains('dragBar')) {
				isDragging = true;
				dragOffset = getPointerPosition(evt);
				return;
			}
			if (target.classList.contains('SVG')) {
				$onSVG = true;
				$selectedId = null;
				$selectedElements = [];
				$selectionMode = false;
				if ($PAN) {
					dragOffset = getPointerPosition(evt);
					isDragging = true;
				}
				return;
			}
			if (target.classList.contains('SelectionBox') && $elementsNode[target.getAttribute('id')]) {
				target = $elementsNode[target.getAttribute('id')];
			}
			targetId = target.getAttribute('id');
			let isDraggable = target.classList.contains('draggable');
			while (!(targetId && isDraggable)) {
				target = target.parentNode;
				// console.log(target.classList);
				if (!target || target.classList.contains('SVG')) return;
				if (target) {
					targetId = target.getAttribute('id');
					isDraggable = target.classList.contains('draggable');
				}
			}
			if (target.classList.contains('circleCenter')) {
				isDragging = true;
				dragOffset = getPointerPosition(evt);
			} else if (target.classList.contains('ui')) {
				if (target.classList.contains('vertex')) {
					$selectedVertex = targetId;
					$selectedControl0 = null;
					$selectedControl1 = null;
					isDragging = true;
					dragOffset = getPointerPosition(evt);
				}
				if (target.classList.contains('tout')) {
					$selectedVertex = null;
					$selectedControl1 = null;
					$selectedControl0 = targetId;
					isDragging = true;
					dragOffset = getPointerPosition(evt);
				}
				if (target.classList.contains('tin')) {
					$selectedVertex = null;
					$selectedControl0 = null;
					$selectedControl1 = targetId;
					isDragging = true;
					dragOffset = getPointerPosition(evt);
				}
				if (target.classList.contains('axis')) {
					isRotating = true;
					rotationMode = !rotationMode;
					isDragging = false;
					// console.log(isRotating, rotationMode)
				}
				if (target.classList.contains('bbox')) {
					isScaling = true;
					isDragging = false;
					isRotating = false;
					scaleNode = target.getAttribute('id');
					dragOffset = getPointerPosition(evt);
				}
			} else {
				while ($elements[targetId] && $elements[targetId].isLocked) {
					target = target.parentNode;
					targetId = target.getAttribute('id');
					if ($elements[targetId].parent === 'SVG') return;
				}
				$selectedId = targetId;
				// console.log($selectedId)
				$selectedElement = target;
				$activeElement = target;
				if(!$elements[$selectedId]) return;
				$elements[$selectedId].bbox = $activeElement.getBBox();
				$elements[$selectedId].ctm = $boundingBox
					?.getScreenCTM()
					.inverse()
					.multiply($activeElement.getScreenCTM());

				$elements[$selectedId].transformUIControls();
				updateSelectionBox($selectedId);

				$elements[$selectedId].axis.x =
					($elements[$selectedId].sbox.tl.x + $elements[$selectedId].sbox.br.x) / 2;
				$elements[$selectedId].axis.y =
					($elements[$selectedId].sbox.tl.y + $elements[$selectedId].sbox.br.y) / 2;
				$elements = $elements;
				if ($elements[$selectedId].tag === 'g' && $elements[$selectedId].patternId) {
					computePatternViewBox($selectedId, $elements[$selectedId].sbox);
				}
				// console.log($elements[$selectedId].ctm)
				// updateSelectionBox($selectedId);
				dragOffset = getPointerPosition(evt);
				isDragging = !rotationMode;
				if (rotationMode) isRotating = true;
				// $showControls = false;
				$onSVG = false;
				// console.log($selectedId)
				// $appHistory = [
				//     ...$appHistory,
				//     {
				//         id: $selectedId,
				//         change: {
				//             tm: $elements[$selectedId].tm,
				//             ctm: $elements[$selectedId].ctm,
				//             bbox: $elements[$selectedId].bbox,
				//             sbox: $elements[$selectedId].sbox,
				//             axis: $elements[$selectedId].axis,
				//         },
				//     },
				// ];
				// $currentState = $appHistory.length - 1;
			}
		}
		function drag(evt) {
			evt.preventDefault();
			let target = evt.target;
			// if(!(target && target.classList && (target.classList.contains('Vectorial') || target.classList.contains('draggable')))) return;
			// console.log(evt.target.classList.contains('SVG') && !$PAN)
			// if(evt.target.classList.contains('SVG') && !$PAN) return;
			if (!(isDragging || isRotating || isScaling)) return;
			// console.log(evt.target);
			if ($pathMode) return;

			if (!target) return;
			if (target.classList.contains('dragBar') && isDragging) {
				let coord = getPointerPosition(evt);
				let change = new Point(coord.x - dragOffset.x, coord.y - dragOffset.y);
				target.style.left = target.offsetLeft + change.x + 'px';
				target.style.top = target.offsetTop + change.y + 'px';
				target.parentNode.style.left = target.parentNode.offsetLeft + change.x + 'px';
				target.parentNode.style.top = target.parentNode.offsetTop + change.y + 'px';
				contextActions.style.left = contextActions.offsetLeft + change.x + 'px';
				contextActions.style.top = contextActions.offsetTop + change.y + 'px';
				boxVisibility.style.left = boxVisibility.offsetLeft + change.x + 'px';
				boxVisibility.style.top = boxVisibility.offsetTop + change.y + 'px';
				dragOffset = {
					x: coord.x,
					y: coord.y
				};
				return;
			}
			if (isDragging && !$PAN) {
				isRotating = false;

				let coord = getPointerPosition(evt);
				let change = new Point(coord.x - dragOffset.x, coord.y - dragOffset.y);
				if (evt.target.classList.contains('circleCenter')) {
					$circleCenter = $circleCenter.a(change);
				}
				if (
					$showControls &&
					$selectedId &&
					$activeElement &&
					$elements[$selectedId].tag === 'path'
				) {
					if ($selectedVertices && $selectedVertices.length > 0) {
						showVirtualVertex = false;
						virtualVertex = null;
						$selectedVertices.forEach((vId) => {
							$elements[$selectedId].updateControl(
								vId,
								coord,
								dragOffset,
								'v',
								$mirrorMode,
								$mirrorVertex,
								$circleMode,
								$circledVertices,
								$circleCenter
							);
						});

						$elements[$selectedId].bbox = $activeElement.getBBox();
					} else if ($selectedVertex) {
						showVirtualVertex = false;
						virtualVertex = null;
						$elements[$selectedId].updateControl(
							$selectedVertex,
							coord,
							dragOffset,
							'v',
							$mirrorMode,
							$mirrorVertex,
							$circleMode,
							$circledVertices,
							$circleCenter
						);
						$elements[$selectedId].bbox = $activeElement.getBBox();
					} else if ($selectedControl0) {
						$elements[$selectedId].updateControl(
							$selectedControl0,
							coord,
							dragOffset,
							'tout',
							$mirrorMode,
							$mirrorVertex,
							$circleMode,
							$circledVertices,
							$circleCenter
						);
						$elements[$selectedId].bbox = $activeElement.getBBox();
					} else if ($selectedControl1) {
						$elements[$selectedId].updateControl(
							$selectedControl1,
							coord,
							dragOffset,
							'tin',
							$mirrorMode,
							$mirrorVertex,
							$circleMode,
							$circledVertices,
							$circleCenter
						);
						$elements[$selectedId].bbox = $activeElement.getBBox();
					}
				} else if ($selectedId && $elements[$selectedId]) {
					// console.log('Dragging...', isDragging)
					$elements[$selectedId].translate(change.x, change.y);
					if ($selectedId === 'lasso') {
						$lassoElements.forEach((elementId) => {
							$elements[elementId].translate(change.x, change.y);
						});
					} else if ($selectedElements?.length > 0) {
						$selectedElements.forEach((elementId) => {
							if ($selectedId !== elementId) $elements[elementId].translate(change.x, change.y);
						});
					}
					if (Math.abs(change.x) + Math.abs(change.y) > 1) stateChanged = true;
				}
				$elements = $elements;
				// translateObject(change);
				dragOffset = {
					x: coord.x,
					y: coord.y
				};
			}
			if (isRotating && rotationMode) {
				isDragging = false;
				let coord = getPointerPosition(evt);
				let change = new Point(coord.x - dragOffset.x, coord.y - dragOffset.y);
				rotateObject(coord, change);
				dragOffset = {
					x: coord.x,
					y: coord.y
				};
				stateChanged = true;
			}
			if (isScaling) {
				let coord = getPointerPosition(evt);
				let change = new Point(coord.x - dragOffset.x, coord.y - dragOffset.y);
				scaleObject(coord, dragOffset, change, scaleNode);

				$elements = $elements;
				// scaleObject(coord, dragOffset, change, scaleNode);
				dragOffset = {
					x: coord.x,
					y: coord.y
				};
				stateChanged = true;
			}
			if ($PAN && isDragging && $onSVG) {
				let coord = getPointerPosition(evt);
				$panX += coord.x - dragOffset.x;
				$panY += coord.y - dragOffset.y;
				dragOffset.x = coord.x;
				dragOffset.y = coord.y;
			}
			if (
				(isDragging || isRotating || isScaling) &&
				$selectedId &&
				$boundingBox &&
				$activeElement
			) {
				$elements[$selectedId].ctm = $boundingBox
					.getScreenCTM()
					.inverse()
					.multiply($activeElement.getScreenCTM());

				$elements[$selectedId].transformUIControls();
				updateSelectionBox($selectedId);
				$elements[$selectedId].axis.x =
					($elements[$selectedId].sbox.tl.x + $elements[$selectedId].sbox.br.x) / 2;
				$elements[$selectedId].axis.y =
					($elements[$selectedId].sbox.tl.y + $elements[$selectedId].sbox.br.y) / 2;
				$elements = $elements;
				if ($elements[$selectedId].tag === 'g' && $elements[$selectedId].patternId) {
					computePatternViewBox($selectedId, $elements[$selectedId].sbox);
				}
			}
		}
		function endDrag(evt) {
			if (evt.target.classList.contains('dragBar')) {
				isDragging = false;
				dragOffset = null;
			} else if (!$pathMode) {
				if (isDragging || isRotating || isScaling) {
					if ($selectedVertex) {
						if ($selectedId && $elements[$selectedId] && $elements[$selectedId].tag === 'path') {
							virtualVertex = $elements[$selectedId].computeMidVertex($selectedVertex);
							showVirtualVertex = true;
						}
					} else if ($selectedControl0) {
					} else if ($selectedControl1) {
					} else {
						// if (
						//     !stateChanged &&
						//     $selectedId &&
						//     $elements[$selectedId]
						// ) {
						//     $appHistory.pop();
						//     $appHistory = $appHistory;
						//     $currentState = $appHistory.length - 1;
						// }
						if (stateChanged && $selectedId && $elements[$selectedId]) {
							$appHistory = [
								...$appHistory,
								{
									id: $selectedId,
									change: {
										tm: $elements[$selectedId].tm,
										ctm: $elements[$selectedId].ctm,
										bbox: $elements[$selectedId].bbox,
										sbox: $elements[$selectedId].sbox,
										axis: $elements[$selectedId].axis
									}
								}
							];
							$currentState = $appHistory.length - 1;
						}
					}
				}
				isDragging = false;
				isRotating = false;
				isScaling = false;
				stateChanged = false;
				// handeledByTouch = false;
			}
		}
	}
	const setContextBoxWidth = () => {
		showContextBox = !showContextBox;
		contextBox.style.width = showContextBox ? '348px' : '58px';
		contextActions.style.width = showContextBox ? '300px' : '10px';
		// contextContent.style.width = showContextBox ? '300px' : '10px';
	};
	// export function doubleClick(node) {
	//     node.addEventListener("dbl")
	// }
	// $: console.log($selectedVertex, $selectedControl0, $selectedControl1, Number($selectedControl0))
    
</script>

<div class="canvas" style="background: {$canvasBackground};">
	<svg
		class="SVG Vectorial"
		bind:this={$svg}
		width={$BBOX.width}
		height={$BBOX.height}
		viewBox="{$BBOX.x} {$BBOX.y} {$BBOX.width} {$BBOX.height}"
		use:makeDraggable
		xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink"
	>
		<g
			class="Vectorial"
			bind:this={$boundingBox}
			transform="translate({$panX} {$panY}) scale({$Z})"
		>
			<defs>
				{#each Object.keys($defs) as def}
					{#if $defs[def].tag === 'shadow'}
						<SVGShadow id={def} />
					{/if}
					{#if $defs[def].tag === 'textMask'}
						<SVGTextMask id={def} />
					{/if}
					{#if $defs[def].tag === 'blur'}
						<SVGBlur id={def} />
					{/if}
					{#if $defs[def].tag === 'specularLighting'}
						<SVGSpecularLighting id={def} />
					{/if}
					{#if $defs[def].tag === 'diffuseLighting'}
						<SVGDiffuseLighting id={def} />
					{/if}
					{#if $defs[def].tag === 'linearGradient'}
						<linearGradient
							id={def}
							x1="{$defs[def].start.x}%"
							y1="{$defs[def].start.y}%"
							x2="{$defs[def].end.x}%"
							y2="{$defs[def].end.y}%"
							gradientUnits={$defs[def].gradientUnits}
							spreadMethod={$defs[def].spreadMethod}
						>
							{#each $defs[def].colors as color}
								<stop offset="{color.offset}%" stop-color={color.stopColor} />
							{/each}
						</linearGradient>
					{/if}
					{#if $defs[def].tag === 'radialGradient'}
						<radialGradient
							id={def}
							cx="{$defs[def].center.x}%"
							cy="{$defs[def].center.y}%"
							r="{$defs[def].r}%"
							fx="{$defs[def].focus.x}%"
							fy="{$defs[def].focus.y}%"
							fr="{$defs[def].fr}%"
							gradientUnits={$defs[def].gradientUnits}
							spreadMethod={$defs[def].spreadMethod}
						>
							{#each $defs[def].colors as color}
								<stop offset="{color.offset}%" stop-color={color.stopColor} />
							{/each}
						</radialGradient>
					{/if}
					{#if $defs[def].tag === 'marker'}
						<SVGMarker id={def} />
					{/if}
					{#if $defs[def].tag === 'pattern'}
						<SVGPattern id={def} />
					{/if}
				{/each}
			</defs>
			{#if $elements}
				{#if !$onSVG}
					{#if $selectedId && $elements[$selectedId]}
						<polygon
							id={$selectedId}
							class="SelectionBox Vectorial"
							points="{$elements[$selectedId].sbox.tl.x},{$elements[$selectedId].sbox.tl
								.y} {$elements[$selectedId].sbox.tr.x},{$elements[$selectedId].sbox.tr
								.y} {$elements[$selectedId].sbox.br.x},{$elements[$selectedId].sbox.br
								.y} {$elements[$selectedId].sbox.bl.x},{$elements[$selectedId].sbox.bl.y}"
							stroke="blue"
							stroke-dasharray="{5 / $Z},{5 / $Z}"
							stroke-width={0.5 / $Z}
							fill="rgba(255, 255, 255, 0)"
						/>
					{/if}
				{/if}
				{#if $selectedElements}
					{#each $selectedElements as elem}
					{#if elem && $elements[elem]}
						<polygon
							class="Vectorial"
							points="{$elements[elem].sbox.tl.x},{$elements[elem].sbox.tl.y} {$elements[elem].sbox
								.tr.x},{$elements[elem].sbox.tr.y} {$elements[elem].sbox.br.x},{$elements[elem].sbox
								.br.y} {$elements[elem].sbox.bl.x},{$elements[elem].sbox.bl.y}"
							stroke="blue"
							stroke-dasharray="{5 / $Z},{5 / $Z}"
							stroke-width={0.5 / $Z}
							fill="none"
						/>
					{/if}
					{/each}
				{/if}
			{/if}
			{#each $elements.Layers as layerId}
				<SVGGroup id={layerId} />
			{/each}
			<!-- {#if $isLasso && $elements['lasso']}
                <SVGPath id={'lasso'} />
            {/if} -->
			{#if $elements && $selectedId && $elements[$selectedId]}
				{#if !$onSVG}
					{#if $showBBoxControls}
						<circle
							id={'topleft'}
							class={'draggable topleft ui bbox Vectorial'}
							cx={$elements[$selectedId].sbox.tl.x}
							cy={$elements[$selectedId].sbox.tl.y}
							r={5 / $Z}
							fill={'black'}
							stroke="white"
							stroke-width={1 / $Z}
						/>
						<circle
							id={'topright'}
							class={'draggable topright ui bbox Vectorial'}
							cx={$elements[$selectedId].sbox.tr.x}
							cy={$elements[$selectedId].sbox.tr.y}
							r={5 / $Z}
							fill={'black'}
							stroke="white"
							stroke-width={1 / $Z}
						/>
						<circle
							id={'bottomleft'}
							class={'draggable bottomleft ui bbox Vectorial'}
							cx={$elements[$selectedId].sbox.bl.x}
							cy={$elements[$selectedId].sbox.bl.y}
							r={5 / $Z}
							fill={'black'}
							stroke="white"
							stroke-width={1 / $Z}
						/>
						<circle
							id={'bottomright'}
							class={'draggable bottomright ui bbox Vectorial'}
							cx={$elements[$selectedId].sbox.br.x}
							cy={$elements[$selectedId].sbox.br.y}
							r={5 / $Z}
							fill={'black'}
							stroke="white"
							stroke-width={1 / $Z}
						/>
						<circle
							id={'topmid'}
							class={'draggable topmid ui bbox Vectorial'}
							cx={($elements[$selectedId].sbox.tl.x + $elements[$selectedId].sbox.tr.x) / 2}
							cy={($elements[$selectedId].sbox.tl.y + $elements[$selectedId].sbox.tr.y) / 2}
							r={5 / $Z}
							fill={'black'}
							stroke="white"
							stroke-width={1 / $Z}
						/>
						<circle
							id={'midleft'}
							class={'draggable midleft ui bbox Vectorial'}
							cx={($elements[$selectedId].sbox.tl.x + $elements[$selectedId].sbox.bl.x) / 2}
							cy={($elements[$selectedId].sbox.tl.y + $elements[$selectedId].sbox.bl.y) / 2}
							r={5 / $Z}
							fill={'black'}
							stroke="white"
							stroke-width={1 / $Z}
						/>
						<circle
							id={'midright'}
							class={'draggable midright ui bbox Vectorial'}
							cx={($elements[$selectedId].sbox.tr.x + $elements[$selectedId].sbox.br.x) / 2}
							cy={($elements[$selectedId].sbox.tr.y + $elements[$selectedId].sbox.br.y) / 2}
							r={5 / $Z}
							fill={'black'}
							stroke="white"
							stroke-width={1 / $Z}
						/>
						<circle
							id={'bottommid'}
							class={'draggable bottommid ui bbox Vectorial'}
							cx={($elements[$selectedId].sbox.bl.x + $elements[$selectedId].sbox.br.x) / 2}
							cy={($elements[$selectedId].sbox.bl.y + $elements[$selectedId].sbox.br.y) / 2}
							r={5 / $Z}
							fill={'black'}
							stroke="white"
							stroke-width={1 / $Z}
						/>
						<circle
							id={'axis'}
							class={'draggable axis ui Vectorial'}
							cx={$elements[$selectedId].axis.x}
							cy={$elements[$selectedId].axis.y}
							r={5 / $Z}
							fill={rotationMode ? 'green' : 'black'}
							stroke="white"
							stroke-width={1 / $Z}
						/>
					{/if}
				{/if}

				{#if $selectedId && ($showControls || $addingNodes) && $elements[$selectedId].tag === 'path'}
					{#each $elements[$selectedId].uiEdges as subpaths}
						{#each subpaths as edge (edge.id)}
							{#if ($selectedVertex && Number($selectedVertex) === Number(edge.id)) || ($selectedControl0 && Number($selectedControl0) === Number(edge.id)) || ($selectedControl1 && Number($selectedControl1) === Number(edge.id))}
								{#if edge.tin !== 'NA'}
									<line
										x1={edge.tin.x}
										y1={edge.tin.y}
										x2={edge.v.x}
										y2={edge.v.y}
										stroke={'gray'}
										stroke-width={0.5 / $Z}
									/>
									<circle
										id={edge.id}
										class={'draggable ui tin Vectorial'}
										cx={edge.tin.x}
										cy={edge.tin.y}
										r={3.5 / $Z}
										stroke="white"
										stroke-width={1 / $Z}
										fill={Number($selectedControl1) === edge.id ? 'red' : 'teal'}
									>
										<title>c0</title>
									</circle>
								{/if}
								{#if edge.tout !== 'NA'}
									<line
										x1={edge.tout.x}
										y1={edge.tout.y}
										x2={edge.v.x}
										y2={edge.v.y}
										stroke={'gray'}
										stroke-width={0.5 / $Z}
									/>

									<circle
										id={edge.id}
										class={'draggable ui tout Vectorial'}
										cx={edge.tout.x}
										cy={edge.tout.y}
										r={3.5 / $Z}
										stroke="white"
										stroke-width={1 / $Z}
										fill={Number($selectedControl0) === edge.id ? 'red' : 'teal'}
										><title>c1</title></circle
									>
								{/if}
							{/if}
							{#if edge.t === 'smooth'}
								<circle
									id={edge.id}
									class={'draggable ui vertex Vectorial'}
									cx={edge.v.x}
									cy={edge.v.y}
									r={4 / $Z}
									stroke={edge.c === 'M' ? 'black' : 'white'}
									stroke-width={1 / $Z}
									fill={Number($selectedVertex) === edge.id
										? 'red'
										: edge.c === 'M'
											? 'white'
											: $selectedVertices && $selectedVertices.indexOf(String(edge.id)) !== -1
												? 'goldenrod'
												: 'black'}
								>
									<title>{edge.c}</title>
								</circle>
							{:else if edge.t === 'sharp'}
								<rect
									id={edge.id}
									class={'draggable ui vertex Vectorial'}
									x={edge.v.x - 4 / $Z}
									y={edge.v.y - 4 / $Z}
									width={8 / $Z}
									height={8 / $Z}
									opacity={0.2}
									stroke={edge.c === 'M' ? 'black' : 'white'}
									stroke-width={1 / $Z}
									fill={Number($selectedVertex) === edge.id
										? 'red'
										: edge.c === 'M'
											? 'white'
											: $selectedVertices && $selectedVertices.indexOf(String(edge.id)) !== -1
												? 'goldenrod'
												: 'black'}
								>
									<title>{edge.c}</title>
								</rect>
							{/if}
							<!-- {#if edge.c === "M"}
                                <circle
                                    id={edge.id}
                                    class={"draggable ui vertex"}
                                    cx={edge.v.x}
                                    cy={edge.v.y}
                                    r={5 / $Z}
                                    stroke="red"
                                    stroke-width={1 / $Z}
                                    fill="none"
                                />
                            {/if} -->
							{#if edge.c === 'A'}
								<circle
									class="Vectorial"
									id={edge.id}
									cx={edge.center.x}
									cy={edge.center.y}
									r={5 / $Z}
									stroke="red"
									stroke-width={1 / $Z}
									fill="none"
								/>
							{/if}
						{/each}
					{/each}
					{#if $circleMode && $circleCenter}
						<circle
							id="circleCenter"
							class={'draggable circleCenter Vectorial'}
							cx={$circleCenter.x}
							cy={$circleCenter.y}
							r={5 / $Z}
							stroke="green"
							stroke-width={1 / $Z}
							fill="green"
						/>
					{/if}
					{#if $selectedVertex && virtualVertex && showVirtualVertex}
						<!-- svelte-ignore a11y-no-static-element-interactions -->
						<rect
							class="Vectorial"
							id={virtualVertex.id}
							on:click={addNewVertex}
							x={virtualVertex.v.x - 4 / $Z}
							y={virtualVertex.v.y - 4 / $Z}
							width={8 / $Z}
							height={8 / $Z}
							stroke={virtualVertex.c === 'M' ? 'black' : 'white'}
							stroke-width={1 / $Z}
							fill="green"
						>
							<title>{virtualVertex.id}</title>
						</rect>
					{/if}
				{/if}
			{/if}
			{#if $showGuides}
				{#each Object.keys($elements) as id}
					{#if $elements[id].axis && $elements[id].sbox}
						<line
							x1={$BBOX.x}
							y1={$elements[id].axis.y}
							x2={$BBOX.x + $BBOX.x + $BBOX.width}
							y2={$elements[id].axis.y}
							stroke="red"
							stroke-width="0.5px"
						/>
						<line
							x1={$elements[id].axis.x}
							y1={$BBOX.y}
							x2={$elements[id].axis.x}
							y2={$BBOX.y + $BBOX.height}
							stroke="red"
							stroke-width="0.5px"
						/>
						<line
							x1={$BBOX.x}
							y1={$elements[id].sbox.tl.y}
							x2={$BBOX.x + $BBOX.x + $BBOX.width}
							y2={$elements[id].sbox.tl.y}
							stroke="red"
							stroke-width="0.5px"
						/>
						<line
							x1={$elements[id].sbox.tl.x}
							y1={$BBOX.y}
							x2={$elements[id].sbox.tl.x}
							y2={$BBOX.y + $BBOX.height}
							stroke="red"
							stroke-width="0.5px"
						/>
						<line
							x1={$BBOX.x}
							y1={$elements[id].sbox.br.y}
							x2={$BBOX.x + $BBOX.x + $BBOX.width}
							y2={$elements[id].sbox.br.y}
							stroke="red"
							stroke-width="0.5px"
						/>
						<line
							x1={$elements[id].sbox.br.x}
							y1={$BBOX.y}
							x2={$elements[id].sbox.br.x}
							y2={$BBOX.y + $BBOX.height}
							stroke="red"
							stroke-width="0.5px"
						/>
					{/if}
				{/each}
			{/if}
		</g>
	</svg>
	{#if $selectedId || $selectedVertex || $selectedControl0 || $selectedControl1}
		<div class="contextBox mdc-elevation--z10 Vectorial" bind:this={contextBox}>
			<div
				class="material-icons boxVisibility"
				bind:this={boxVisibility}
				on:click={setContextBoxWidth}
			>
				{showContextBox ? 'close_fullscreen' : 'fullscreen'}
			</div>
			<div class="dragBar draggable Vectorial material-icons" use:makeDraggable>drag_indicator</div>
			<div class="contextActions noScrollBar" bind:this={contextActions}>
				<MenuSurface static style="width:100%; height:100%;">
					<ContextActions />
				</MenuSurface>
			</div>
			<div class="content" bind:this={contextContent}>
				{#key $selectedId}
					<ContextBox />
				{/key}
			</div>
		</div>
	{/if}
</div>

<!-- <div class="animations">
    <h4 class="center">Animations</h4>
</div> -->

<style>
	.SVG {
		touch-action: none;
	}

	/* .vbuttongroup {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    } */

	.canvas {
		width: fit-content;
		height: fit-content;
		background: white;
		box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);
	}

	.contextBox {
		position: fixed;
		left: 50px;
		top: 50px;
		display: grid;
		grid-template-columns: 48px 1fr;
		grid-template-rows: 48px 1fr;
		z-index: 100;
		width: 348px;
		height: 348px;
		overflow-x: hidden;
	}
	.boxVisibility {
		position: fixed;
		left: 50px;
		top: 50px;
		width: 48px;
		height: 48px;
		background: green;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
	}
	.dragBar {
		position: fixed;
		width: 48px;
		height: 300px;
		background: red;
		z-index: 200;
		left: 50px;
		top: 98px;
		font-size: 48px;
		cursor: move; /* fallback if grab cursor is unsupported */
		cursor: grab;
		cursor: -moz-grab;
		cursor: -webkit-grab;
		-webkit-user-select: none; /* Safari */
		-ms-user-select: none; /* IE 10 and IE 11 */
		user-select: none; /* Standard syntax */
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.dragBar:active {
		cursor: grabbing;
		cursor: -moz-grabbing;
		cursor: -webkit-grabbing;
	}
	.contextActions {
		position: fixed;
		width: 300px;
		height: 48px;
		/* background: gray; */
		z-index: 200;
		left: 98px;
		top: 50px;
		font-size: 48px;
		/* border-radius: 10px 0 0 10px; */
		cursor: move; /* fallback if grab cursor is unsupported */
		cursor: grab;
		cursor: -moz-grab;
		cursor: -webkit-grab;
		-webkit-user-select: none; /* Safari */
		-ms-user-select: none; /* IE 10 and IE 11 */
		user-select: none; /* Standard syntax */
		display: flex;
		align-items: center;
		overflow-x: auto;
	}
	.content {
		background: black;
		width: 300px;
		height: 300px;
		margin-left: 48px;
		box-shadow: 1px 1px 1px gray;
		margin-top: 48px;
	}
	/* .appearance {
        position: absolute;
        z-index: 10;
        top: 5em;
        right: 3em;
        padding: 0.5em 1em;
        background: rgb(219, 219, 219);
        border-radius: 10px;
        display: flex;
        gap: 0.9em;
        align-items: center;
        justify-content: start;
        font-size: 0.7em;
        color: rgb(48, 48, 48);
        width: 300px;
        box-shadow: 0 0 3px black;
    } */
</style>
