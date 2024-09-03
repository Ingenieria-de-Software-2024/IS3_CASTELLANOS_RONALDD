<!-- <h1 class="text-center">Mapa de la Operación</h1>

<div class="row justify-content-center">
    <div class="col-lg-6 border rounded shadow" id="map" style="height: 60vh; min-height: auto;">

    </div>
</div>

<script src="<?= asset('./build/js/mapa/index.js') ?>"></script> -->





<h1 class="text-center">Mapa de la Operación</h1>

<div class="row justify-content-center">

    <div class="col-lg-5">
        <form id="coordenadasForm" class="bg-dark bg-gradient text-center text-white p-5 rounded mt-5">
            <div class="row justify-content-center">
                <div class="col-6 mb-3">
                    <label for="coord1" class="form-label">Punto 1</label>
                    <input type="text" class="form-control" id="coord1" placeholder="15.525158, -90.32959">
                </div>

                <div class="col-6 mb-3">
                    <label for="coord2" class="form-label">Punto 2</label>
                    <input type="text" class="form-control" id="coord2" placeholder="15.52123, -90.32231">
                </div>
            </div>

            <button type="submit" class="btn btn-primary btn-lg">Dibujar</button>
        </form>
    </div>

    <div class="col-lg-5 border rounded shadow" id="map" style="height: 60vh; min-height: auto;">
    </div>
</div>


<script src="<?= asset('./build/js/mapa/index.js') ?>"></script>