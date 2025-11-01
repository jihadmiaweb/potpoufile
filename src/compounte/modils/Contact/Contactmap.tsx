

function ContactMap() {
    return (
        <section className="px-6 md:px-12 py-20">
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">
                Find Us on the Map
            </h2>

            {/* Embedded Google Map */}
            <div className="w-full h-60 sm:h-80 md:h-96 rounded-lg overflow-hidden shadow-xl">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.903534168363!2d90.39196317453248!3d23.7508531888251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8bcb27d5ff1%3A0x9e139bbbe0ebfb34!2sDhanmondi%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1698354700000!5m2!1sen!2sbd"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}

                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map showing our location at Dhanmondi, Dhaka"
                ></iframe>
            </div>
        </section>
    );
}

export default ContactMap;
