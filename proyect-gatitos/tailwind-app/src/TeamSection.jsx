import imagen from './assets/IMG_4812.jpg';
import imagenG from './assets/Josue.jpg';
import imagenV from './assets/img2.jpeg';
import imagenA from './assets/img3.jpeg';

function TeamSection(){
 return(
    <div class="bg-white py-24 sm:py-32">
  <div class="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
    <div class="max-w-xl">
      <h2 class="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">Equipo gatitos</h2>
      <p class="mt-6 text-lg/8 text-gray-600">Ofrecemos prendas seleccionadas cuidadosamente para quienes buscan calidad, comodidad y buen gusto. Descubre nuestras colecciones y renueva tu armario con lo mejor de la temporada..</p>
    </div>
    <ul role="list" class="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
      <li>
        <div class="flex items-center gap-x-6">
          <img class="size-16 rounded-full object-cover" src={imagen} alt=""/>
          <div>
            <h3 class="text-base/7 font-semibold tracking-tight text-gray-900">Chávez Ruíz Pedro</h3>
            <p class="text-sm/6 font-semibold text-indigo-600">chavez.ruiz.pedro607@gmail.com</p>
          </div>
        </div>
      </li>
      <li>
        <div class="flex items-center gap-x-6">
          <img class="size-16 rounded-full object-cover" src={imagenV} alt=""/>
          <div>
            <h3 class="text-base/7 font-semibold tracking-tight text-gray-900">Valencia Cornejo Miguel Alejandro</h3>
            <p class="text-sm/6 font-semibold text-indigo-600">migaleval6a@gmail.com</p>
          </div>
        </div>
      </li>
      <li>
        <div class="flex items-center gap-x-6">
          <img class="size-16 rounded-full object-cover " src={imagenA} alt=""/>
          <div>
            <h3 class="text-base/7 font-semibold tracking-tight text-gray-900">Guerra Hernández Regina Arahí</h3>
            <p class="text-sm/6 font-semibold text-indigo-600">ghghjs21@gmail.com</p>
          </div>
        </div>
      </li>
      <li>
        <div class="flex items-center gap-x-6">
          <img class="size-16 rounded-full object-cover" src={imagenG} alt=""/>
          <div>
            <h3 class="text-base/7 font-semibold tracking-tight text-gray-900">Ledesma Cortes Josue</h3>
            <p class="text-sm/6 font-semibold text-indigo-600">josue.ledesma.cortes@comunidad.unam.mx</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</div>

 );
}
export default TeamSection;